import fs from 'fs';
import path from 'path';

//import { } from '../GeneratePlanilha/excel.mjs';

//  export let folderPath = path.normalize('C:\\Users\\Willian Torrente\\OneDrive\\Área de Trabalho\\Programas Naty\\Scrap\\ScrapRaizGoogleMaps\\arquivos');
 export let folderPath = path.normalize('C:/Users/ComercialNaty/Documents/CS0/gerarScrapECampanha/ScrapRaizGoogleMaps/arquivos');

if (!fs.existsSync(folderPath)) { // O diretório ainda não foi criado.
    fs.mkdirSync(folderPath, { recursive: true });
}