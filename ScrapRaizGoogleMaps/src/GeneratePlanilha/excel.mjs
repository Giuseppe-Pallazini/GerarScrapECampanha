//import fs from 'fs/promises';  // Modificado para usar fs.promises.mkdir diretamente
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import slugify from 'slugify';

//import { query } from '../scrap/searchGoogleMaps.mjs';

const date = new Date();
const timestampFormatado = date.toLocaleString('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).replace(/[\/:, ]+/g, '_'); // Substitua caracteres especiais por '_'

// Função para preencher a planilha
let contador = 1;
export function preencherPlanilha(worksheet, dados) {

  if (!dados.category) {
    console.error('Erro: Categoria não fornecida nos dados.');
    return;
  }
  //console.log('Preenchendo planilha com dados:', dados);
  // Adicione as colunas necessárias à planilha (ajuste conforme necessário)
  worksheet.columns = [
    { header: 'Quant', key: 'quant', width: 20 },
    { header: 'Data', key: 'date', width: 20 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Nome_Fantasia', key: 'nome', width: 15 },
    { header: 'Seguimento', key: 'category', width: 20 },
    { header: 'Endereço_Google', key: 'endereco', width: 10 },
    { header: 'Telefone_Google', key: 'telefone', width: 20 },
    { header: 'Quant_Estrelas_Google', key: 'avaliacao', width: 10 },
    { header: 'Quant_Cometário_Google', key: 'reviews', width: 10 },
    { header: 'Quant_Fotos', key: 'fotos', width: 10 },
    { header: 'Site', key: 'site', width: 10 },
    { header: 'Facebook', key: 'facebook', width: 10 },
    { header: 'Instagram', key: 'instagram', width: 10 },
    { header: 'Linkedin', key: 'linkedin', width: 20 },
    { header: 'Google_ID', key: 'identificador', width: 20 },
    { header: 'Google_Link', key: 'linkGoogle', width: 20 },
  ];

  // Preencha a planilha com os resultados
  worksheet.addRow({
    quant: contador++ || 'Null',
    date: date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
    status: dados.status || 'Null',
    nome: dados.storeName || 'Null',
    category: dados.category || 'Null',
    endereco: dados.address || 'Null',
    telefone: dados.phone || 'Null',
    avaliacao: dados.stars || 'Null',
    reviews: dados.numberOfReviews || 'Null',
    //fotos: dados.fotos || 'Null',
    site: dados.bizWebsite || 'Null',
    facebook: dados.facebook || 'Null',
    instagram: dados.instagram || 'Null',
    linkedin: dados.linkedin || 'Null',
    identificador: dados.placeId || 'Null',
    linkGoogle: dados.googleUrl || 'Null',
  });
}



// Função para criar a planilha// Função para criar a planilha
export function criarPlanilha(data) {
  try {
    contador = 1;
    const worksheetName = 'Planilha_' + timestampFormatado;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(worksheetName);

    if (!worksheet || typeof worksheet.addRow !== 'function') {
      // console.error('Erro: worksheet não foi criado corretamente ou não possui o método addRow.');
      return null;
    }

    // console.log('Planilha criada com sucesso.');
    return { workbook, worksheet };  // Retorne ambos, workbook e worksheet
  } catch (error) {
    // console.error('Erro ao criar a planilha:', error);
    return null;
  }
}

// Função para salvar o arquivo
export async function salvarArquivo(workbook, query) {
  const __filename = path.normalize('C:/Users/GIUSEPPE/Documents/CS0/projetoScrapCampanha/GerarScrapECampanhaPcGiuseppe/ScrapRaizGoogleMaps/arquivos');;
  if (!fs.existsSync(__filename)) {
    fs.mkdirSync(__filename, { recursive: true });
    // console.log("O diretório foi criado.");
  }
  const __dirname = path.dirname(__filename);
  // console.log('Diretório:', __dirname);

  let termo = '';
  let cidadeEscolhida = '';
  let estadoEscolhido = '';
  if (query) {
    const parts = query.split("'"); // Primeiro, dividimos a query por aspas simples
    if (parts.length > 1) {
      termo = parts[1]; // O termo é a segunda parte (índice 1)
      const localizacao = parts[2].split('-'); // A localização é a terceira parte (índice 2), dividida por hífen
      if (localizacao.length > 1) {
        cidadeEscolhida = localizacao[0].trim(); // A cidade é a primeira parte da localização (índice 0)
        estadoEscolhido = localizacao[1].trim(); // O estado é a segunda parte da localização (índice 1)
      } else {
        // console.error('query não contém uma cidade e um estado');
        return;
      }
    } else {
      // console.error('query não está formatada corretamente');
      return;
    }
  } else {
    // console.error('query está indefinida');
    return;
  }

  const nomeTermoLimpo = cidadeEscolhida.replace(/[^a-zA-Z0-9]/g, ''); // Remove caracteres não alfanuméricos
  const nomeTermoNormalizado = slugify(nomeTermoLimpo, { lower: true, replacement: '_' }).replace('/', '_');

  cidadeEscolhida = cidadeEscolhida.replace(/\s+/g, '_'); // Substitui todos os espaços em branco por underscores
  estadoEscolhido = estadoEscolhido.replace(/\s+/g, '_'); // Substitui todos os espaços em branco por underscores
  const nomeArquivo = `${cidadeEscolhida}.xlsx`;
  const nomeArquivoSemEspacos = nomeArquivo.replace(/[\/\\:*?"<>|]/g, '_'); // Remover caracteres inválidos

  // Defina o diretório de destino corretamente
  const diretorioDestino = path.join(__filename, termo, estadoEscolhido);// Modificado para incluir 'estado', 'cidade' e 'eletronica'
  const caminhoArquivo = path.join(diretorioDestino, nomeArquivoSemEspacos);

  // Correção para criar o diretório se não existir
  if (!fs.existsSync(diretorioDestino)) {
    try {
      fs.mkdirSync(diretorioDestino, { recursive: true });
    } catch (error) {
      // console.error('Erro ao criar o diretório:', error);
    }
  } else {
    // console.log(`Diretório já existe: ${diretorioDestino}`);
  }

  try {
    await workbook.xlsx.writeFile(caminhoArquivo);
    // console.log(`Arquivo salvo com sucesso em: ${caminhoArquivo}`);
  } catch (error) {
    // console.error('Erro ao salvar o arquivo:', error);
  }
}

// Função principal para gerar a planilha
export async function excel(results, query) {
  try {
    // console.log('Chamando a função excel com a query:', query);

    const { workbook, worksheet } = criarPlanilha(new Date());  // Desestruture o retorno para obter workbook e worksheet

    if (!worksheet) {
      return;
    }
    // Preencher a planilha com os dados de runSearchData
    results.forEach((result) => {
      preencherPlanilha(worksheet, result);
    });

    await salvarArquivo(workbook, query);  // Passe o workbook para salvarArquivo
  } catch (error) {
    // console.error('Erro durante a execução:', error);
  }
}
