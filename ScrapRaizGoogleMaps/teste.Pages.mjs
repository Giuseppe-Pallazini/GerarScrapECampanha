import * as cheerio from "cheerio";
import puppeteerExtra from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

async function searchGoogleMaps() {
    try {
        const start = Date.now();
        puppeteerExtra.use(stealthPlugin());
        const browser = await puppeteerExtra.launch({
            defaultViewport: { width: 1200, height: 800 }, // Defina as dimensões desejadas da janela do navegador
            headless: false,
            //headless: 'new',
            //slowMo: 350,
            devtools: true,
            executablePath: "", // your path here em caso de usar chromium
            timeout: 30000,
            ignoreHTTPSErrors: true,
            args: ['--disabled-setuid-sandbox', '--no-sandbox', '--disable-web-security', '--disable-features=IsolateOrigins,site-per-process', '--disable-features=NetworkQualityEstimator'],
        });

        // const browser = await puppeteerExtra.launch({
        //   args: chromium.args,
        //   defaultViewport: chromium.defaultViewport,
        //   executablePath: await chromium.executablePath(),
        //   headless: "new",
        //   ignoreHTTPSErrors: true,
        // });

        /*----*/
        const page = await browser.newPage();
        // Retira as imagens para ser mais rápido o carregar da página.
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (request.resourceType() === 'image') {
                request.abort();
            } else {
                request.continue();
            }
        });
        /*----*/

        //const page = await browser.newPage();

        try {
            await page.goto(URL, {
                waitUntil: ['domcontentloaded', 'networkidle2'],
                timeout: 60000
            });
            // Adiciona uma pausa antes de recarregar a página (opcional)
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Força o recarregamento da página
            // await page.reload({ waitUntil: ['domcontentloaded', 'networkidle2'] });
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.log("error going to page");
        }

        // await autoScroll(page);

        const html = await page.content();
        const $ = cheerio.load(html);
        const fullAddress = $('.rogA2c .Io6YTe').first().text();
        const photos = $('button.Dx2nRe div.YkuOqf').first().text();
        const numberPhotos = photos.replace(/\D/g, '');
        const redesSociais = $('.CIdPsb').first().text();

        console.log("redesSociais: " + redesSociais);
        console.log("photos: " + numberPhotos);
        console.log("fullAddress: " + fullAddress);
        await browser.close();
        return {
            fullAddress: fullAddress,
            photos: photos
        };

    } catch (error) {
        console.log("error at googleMaps", error.message);
    }
}
 searchGoogleMaps(URL);
 URL= `https://www.google.com/maps/place/C%C3%A2mara+Municipal+de+Vereadores+de+Mariana+Pimentel/@-30.3543189,-51.5841828,17z/data=!3m1!4b1!4m6!3m5!1s0x951a30a413081c01:0xf9651bd63f6a730a!8m2!3d-30.3543189!4d-51.5841828!16s%2Fg%2F11fzf4dvmm?authuser=0&hl=pt-BR&entry=ttu`;


// async function autoScroll(page) {
//     await page.evaluate(async () => {
//         const wrapper = document.querySelector('div[role="feed"]');

//         await new Promise((resolve, reject) => {
//             var totalHeight = 0;
//             var distance = 1000;
//             var scrollDelay = 3000;

//             var timer = setInterval(async () => {
//                 var scrollHeightBefore = wrapper.scrollHeight;
//                 wrapper.scrollBy(0, distance);
//                 totalHeight += distance;

//                 if (totalHeight >= scrollHeightBefore) {
//                     totalHeight = 0;

//                     // Adicione um tempo de espera entre as iterações
//                     await new Promise((resolve) => setTimeout(resolve, scrollDelay));

//                     // Calculate scrollHeight after waiting
//                     var scrollHeightAfter = wrapper.scrollHeight;

//                     if (scrollHeightAfter > scrollHeightBefore) {
//                         // More content loaded, keep scrolling
//                         return;
//                     } else {
//                         // No more content loaded, stop scrolling
//                         clearInterval(timer);
//                         resolve();
//                     }
//                 }
//             }, 500);
//         });
//     });
// }

