import fs from 'fs';
import path from 'path';

//import { } from '../GeneratePlanilha/excel.mjs';

//  export let folderPath = path.normalize('C:\\Users\\Willian Torrente\\OneDrive\\Área de Trabalho\\Programas Naty\\Scrap\\ScrapRaizGoogleMaps\\arquivos');
 export let folderPath = path.normalize('C:\\Users\\ComercialNaty\\Documents\\CS0\\GerarScrapECampanha\\ScrapRaizGoogleMaps\\arquivos');

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    // console.log("O diretório foi criado.");
} else {
    // console.log("O diretório já existe.");
}