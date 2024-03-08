import * as cheerio from "cheerio";
import puppeteerExtra from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
//import chromium from "@sparticuz/chromium";

async function searchGoogleMaps() {
    try {
        const start = Date.now();

        puppeteerExtra.use(stealthPlugin());

        const browser = await puppeteerExtra.launch({
            headless: false,
            // headless: "new",
            devtools: false,
            executablePath: "", // your path here
        });

        // const browser = await puppeteerExtra.launch({
        //   args: chromium.args,
        //   defaultViewport: chromium.defaultViewport,
        //   executablePath: await chromium.executablePath(),
        //   headless: "new",
        //   ignoreHTTPSErrors: true,
        // });

        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'),
            page.setDefaultNavigationTimeout(0);

        // const query = `'Segurança Eletrônica' Vale do Anari - Ro`;

        try {
            await page.goto(
                `https://www.google.com/maps/search/${query.split(" ").join("+")}`
                //`https://www.google.com.br/search?tbm=lcl&q=${query.split(" ").join("+")}`
            );
            // Adiciona uma pausa antes de recarregar a página (opcional)
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Força o recarregamento da página
            await page.reload({ waitUntil: ['domcontentloaded', 'networkidle2'] });
            await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
            console.log("error going to page");
        }

        async function autoScroll(page) {
            await page.evaluate(async () => {
                const wrapper = document.querySelector('div[role="feed"]');

                await new Promise((resolve, reject) => {
                    var totalHeight = 0;
                    var distance = 1000;
                    var scrollDelay = 3000;

                    var timer = setInterval(async () => {
                        var scrollHeightBefore = wrapper.scrollHeight;
                        wrapper.scrollBy(0, distance);
                        totalHeight += distance;

                        if (totalHeight >= scrollHeightBefore) {
                            totalHeight = 0;

                            // Adicione um tempo de espera entre as iterações
                            await new Promise((resolve) => setTimeout(resolve, scrollDelay));

                            // Calculate scrollHeight after waiting
                            var scrollHeightAfter = wrapper.scrollHeight;

                            if (scrollHeightAfter > scrollHeightBefore) {
                                // More content loaded, keep scrolling
                                return;
                            } else {
                                // No more content loaded, stop scrolling
                                clearInterval(timer);
                                resolve();
                            }
                        }
                    }, 500);
                });
            });
        }

        await autoScroll(page);

        const html = await page.content();
        //const pages = await browser.pages();
        //await Promise.all(pages.map((page) => page.close()));

        //await browser.close();
        //console.log("browser closed");

        // get all a tag parent where a tag href includes /maps/place/
        const $ = cheerio.load(html);
        const aTags = $("a");
        const parents = [];
        aTags.each((i, el) => {
            const href = $(el).attr("href");
            if (!href) {
                return;
            }
            if (href.includes("/maps/place/")) {
                parents.push($(el).parent());
            }
        });

        console.log("parents", parents.length);

        const buisnesses = [];

        parents.forEach((parent) => {
            const url = parent.find("a").attr("href");
            // get a tag where data-value="Website"
            const website = parent.find('a[data-value="Website"]').attr("href");
            // find a div that includes the class fontHeadlineSmall
            const storeName = parent.find("div.fontHeadlineSmall").text();
            // find span that includes class fontBodyMedium
            const ratingText = parent
                .find("span.fontBodyMedium > span")
                .attr("aria-label");

            // get the first div that includes the class fontBodyMedium
            const bodyDiv = parent.find("div.fontBodyMedium").first();
            const children = bodyDiv.children();
            const lastChild = children.last();
            const firstOfLast = lastChild.children().first();
            const lastOfLast = lastChild.children().last();
            //const telefone_alterado = lastOfLast.toString().replace(/([^\d])+/gim, ''); //para remover duplicados e ordenar



            /*----- */
            (async () => {
                let googleUrl = business.googleUrl;
                const newPage = await browser.newPage();

                try {
                    await newPage.goto(googleUrl, { waitUntil: 'load' });

                    const result = await newPage.evaluate(() => {
                        let addressParts = '';
                        try {
                            addressParts = document.querySelectorAll('[data-dtype="d3ifr"]')[1] ? document.querySelectorAll('[data-dtype="d3ifr"]')[1].innerText : ``;
                            
                        } catch (error) {
                            console.log(error, 'Paginação interna');
                            return;
                        }
                    });

                    console.log("Aqui4" + result.street); // use the result variable
                    await newPage.close(); // Close the page after you're done with it

                } catch (error) {
                    console.log("aqui3" + error);
                }
            })();
            let street, rest1, city, state, zip;
            let fullAddress = firstOfLast?.text()?.split("·")?.[1]?.trim();
            if (fullAddress) {
                const addressParts = fullAddress.split(" - ");
                if (addressParts.length > 1) {
                    [street, rest1] = addressParts;
                    if (rest1) {
                        const cityStateZipParts = rest1.split(", ");
                        if (cityStateZipParts.length > 1) {
                            [city, state, zip] = cityStateZipParts;
                        }
                    }
                }
            }

            for (const business of buisnesses) {
                (async () => {
                    const newPage = await browser.newPage();
                    let googleUrl = business.googleUrl;
                    //console.log("googleUrl aqui:", googleUrl);

                    try {
                        Promise.all([
                            await newPage.goto(googleUrl, { waitUntil: 'load' }),
                        ]);
                        const result = await newPage.evaluate(() => {

                            try {
                                page.waitForSelector('.kR99db', { timeout: 5000 });
                            } catch (error) {
                                console.error('Error waiting for selector: ', error);
                            }
                            console.log(window.location.href);

                            let addressParts = '';
                            try {
                                addressParts = document.querySelectorAll('[data-dtype="d3ifr"]')[1] ? document.querySelectorAll('[data-dtype="d3ifr"]')[1].innerText : ``;
                                console.log("addressParts", addressParts);
                                //passar para o segundo scrap
                                street = '';
                                rest1 = '';
                                city = '';
                                state = '';
                                zip = '';
                                if (fullAddress) {
                                    const addressParts = fullAddress.split(" - ");
                                    if (addressParts.length > 1) {
                                        const [street, rest1] = addressParts;
                                        if (rest1) {
                                            const cityStateZipParts = rest1.split(", ");
                                            if (cityStateZipParts.length > 1) {
                                                const [city, rest2] = cityStateZipParts;
                                                console.log("city", city);
                                                if (rest2) {
                                                    const [state, zip] = rest2.split(", ");
                                                    console.log("state", state);
                                                    console.log("zip", zip);
                                                }
                                            }
                                        }
                                    }
                                    page.close();
                                    return {
                                        addressParts,
                                        street,
                                        rest1,
                                        city,
                                        state,
                                        zip
                                    };
                                }


                            } catch (error) {
                                console.log(error, 'Paginação interna');
                                return;
                            }
                        })();

                    } catch (error) {
                        console.log("aqui3" + error);
                    }
                    console.log("Aqui4" + newPage.street); // use the newPage variable
                    page.close(); // Close the page after you're done with it
                })();
            }

            /*----- */


            buisnesses.push({
                placeId: `ChI${url?.split("?")?.[0]?.split("ChI")?.[1]}`,
                address: firstOfLast?.text()?.split("·")?.[1]?.trim(),
                address: firstOfLast?.text()?.split("·")?.[1]?.trim(),
                category: firstOfLast?.text()?.split("·")?.[0]?.trim(),
                phone: lastOfLast?.text()?.split("·")?.[1]?.trim(),
                googleUrl: url,
                bizWebsite: website,
                storeName,
                ratingText,
                stars: ratingText?.split("stars")?.[0]?.trim()
                    ? Number(ratingText?.split("stars")?.[0]?.trim())
                    : null,
                numberOfReviews: ratingText
                    ?.split("stars")?.[1]
                    ?.replace("Reviews", "")
                    ?.trim()
                    ? Number(
                        ratingText?.split("stars")?.[1]?.replace("Reviews", "")?.trim()
                    )
                    : null,
                address: street,
                neighborhood: rest1 ? rest1.split(", ")[0] : null,
                city: city,
                state: state,
                zip: zip,
            });
        });

        const end = Date.now();

        //console.log("businesses", buisnesses);
        console.log(`time in seconds ${Math.floor((end - start) / 1000)}`);
        return buisnesses;
    } catch (error) {
        console.log("error at googleMaps", error.message);
    }
}
searchGoogleMaps();

//Trabalhar no código
// //Função utilizada para agrupar e organizar os identificadores
// function dynamicSort(property) {
//   var sortOrder = 1;
//   if (property[0] === "-") {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function (a, b) {
//     var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//     return result * sortOrder;
//   }