import puppeteer from 'puppeteer';

const URL = "https://www.mercadolivre.com.br";
const searchFor = "caviar";

let count = 1, countLink = 1;
let errorCount = 0;
let totalPages = 0;
let allLinks = [];
let allData = [];
let list = [];

// Função que valida a URL
function isValidURL(str) {
  const pattern = /^(https?:\/\/)?([\w.-]+\.\w{2,})(:\d+)?(\/[-a-zA-Z\d%_.~+]*)?(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/i;
  return pattern.test(str);
}

// Função que faz a abertura do Browser e deixa pronto para pesquisa.
async function BrowseMercadoLivre() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 0, args: ['--disable-dev-shm-usage'], defaultViewport: { width: 800, height: 400 } });
  // Navegador para obter o total de páginas e fazer a troca das paginas para obter os links de cada página.
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.70 Safari/537.36');

  console.log(`Processo iniciado`);

  await page.goto(URL, { waitUntil: 'domcontentloaded' });
  console.log(`Abriu a URL`);

  await page.waitForSelector("#cb1-edit", { visible: true });
  await page.type(`#cb1-edit`, searchFor);

  await Promise.all([
    page.waitForNavigation({ timeout: 0, waitUntil: 'domcontentloaded' }),
    page.click('.nav-search-btn')
  ]);

  await page.setCacheEnabled(false);
  const element = await page.$('.andes-pagination__page-count');

  if (element) {

    const html = await page.evaluate(el => el.innerHTML, element);
    const regex = /<!-- -->(\d+)/;
    const match = html.match(regex);

    if (match && match[1]) {
      totalPages = parseInt(match[1]);
      console.log(`Total de páginas: ${totalPages}`);
    } else {
      console.log('Não foi possível encontrar a informação de total de páginas.');
    }
  } else {
    console.log('Elemento contador de páginas não encontrado.');
  }

  while (totalPages >= 0) {
    try {
      let pageLinks = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.ui-search-result__content-wrapper > div > a');
        return [...nodeList].map(link => link.href);
      });

      allLinks = allLinks.concat(pageLinks);


      await page.waitForSelector('.ui-search-result__content-wrapper', { visible: true });
      const nextPageButton = await page.$('.andes-pagination__button--next .andes-pagination__link');
      if (nextPageButton) {
        await Promise.all([
          page.waitForNavigation({ timeout: 0, waitUntil: 'domcontentloaded' }),
          nextPageButton.click()
        ]);       
        console.log(`Total de Links da Página: ${pageLinks.length}`);
        //console.log(`${allLinks}`);
        console.log(`Clicou no botão "Seguinte"\nPáginas Restantes: ${totalPages--}`);

      } else {
        console.log('Botão "Seguinte" não encontrado ... finalizando o processo.');
        break;
      }    
    } catch (error) {

      console.error(`Erro durante a execução geral do código: ${error.message}`);
    }
    finally {
      console.log(`\n\nTotal de Links: ${allLinks.length}`);
      //console.log(`Impressão dos links: ${allLinks}`);
    }
  }
  console.log(`Todos links da página capturados com sucesso!`);
  
  // Navegador para obter os dados de cada link.
  for (let link of allLinks) {
    try {
      // Navigate to the link
      await page.goto(link);

      // Wait for the specific elements to be visible
      await page.waitForSelector('.ui-pdp-title', { visible: true });
      await page.waitForSelector('.andes-money-amount__fraction', { visible: true });

      // Extract the data
      let data = await page.evaluate(() => {
        let title = document.querySelector('.ui-pdp-title').innerText;
        let price = document.querySelector('.andes-money-amount__fraction').innerText;
        return { title, price };
      });

      //console.log.log(`Link ${countLink++} de ${allLinks.length} extraído com sucesso!`);
      //console.log(data);
      console.log(`${countLink++} de ${allLinks.length} extraído com sucesso!`);
      console.log("titulo: " + data.title + "\npreço: " + data.price + "\n\n");
      allData.push(data);
    } catch (error) {
      console.error(`Error extracting data from link: ${link}`, error);
    }
  }
  console.log(`Todos os dados extraídos com sucesso!`);
  console.log(`--------------------------------------`);
  console.log(allData);
  console.log(`Total de Links: ${allLinks.length}`);
  await browser.close();
}

BrowseMercadoLivre();
