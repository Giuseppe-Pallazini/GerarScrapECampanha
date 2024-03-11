import fs from 'fs';
import { exec } from 'child_process';
import { runSearch } from './src/scrap/searchGoogleMapsLink.mjs';


const rawdata = fs.readFileSync('C:/Users/ComercialNaty/Documents/CS0/gerarScrapECampanha/ScrapRaizGoogleMaps/src/populacao/populacao_2020.json');
const populacao = JSON.parse(rawdata);

let cidadesEmbaralhadas;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let intervalId; // Variável para armazenar o ID do intervalo

function sortearCidadesPorEstado(estadoDesejado) {
  if (!cidadesEmbaralhadas || estadoDesejado !== estadoDesejado) {
    // Se não houver cidades embaralhadas ou o estado for diferente, reembaralhe

    const cidadesPorEstado = populacao.reduce((acc, item) => {
      const { cidade, uf } = item;
      const estado = uf || item.estado;
      if (!acc[estado]) {
        acc[estado] = [];
      }
      acc[estado].push(cidade);
      return acc;
    }, {});

    const estadoUpperCase = estadoDesejado.toUpperCase();
    const cidadesDoEstado = cidadesPorEstado[estadoUpperCase] || [];
    cidadesEmbaralhadas = shuffleArray(cidadesDoEstado.slice());
  }

  return () => {
    // Retorna uma cidade por chamada
    if (cidadesEmbaralhadas.length === 0) {
      // console.log('Todas as cidades foram sorteadas.');
      return null;
    }
    return cidadesEmbaralhadas.shift();
  };
}


function handleSorteio() {
  // Aqui você pode fazer o que for necessário antes de iniciar um novo sorteio
  // Por exemplo, imprimir uma mensagem indicando o início de um novo ciclo
  // console.log('Iniciando novo ciclo de sorteios...');

  // Chama a função para sortear cidades por estado
  const sorteioPorEstado = sortearCidadesPorEstado(estadoDesejado);

  // Inicia o primeiro sorteio
  sorteioPorEstado();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function processQuery(query) {
  var cidade = query.split(" ").slice(1, -2).join(" ").toUpperCase();
  var estado = query.split(" ").slice(-1)[0].toUpperCase();
  var termo = query.split(" ").slice(0, 1).join(" ").toUpperCase();

  // Retorna as informações processadas
  return { cidade, estado, termo };
}

async function index(termo, estado) {
  const sorteioCidade = sortearCidadesPorEstado(estado);
  let cidadeSorteada;

  while ((cidadeSorteada = sorteioCidade()) !== null) {
    const query = `'${termo}' ${cidadeSorteada} - ${estado}`;
    // console.log(`Buscando por: ${query}`);
    await executeSearchWithRandomDelay(query);
    // console.log(`Esperando por 180 segundos antes da próxima chamada.`);
    await new Promise(resolve => setTimeout(resolve, 180 * 1000));
  }
}


async function executeSearchWithRandomDelay(query) {
  const maxTentativas = 3;
  let tentativas = 0;

  while (tentativas < maxTentativas) {
    try {
      const shouldWait = Math.random() < 0.5; // 50% de chance de esperar

      if (shouldWait) {
        const waitTime = getRandomInt(1, 5) * 60 * 1000; // Convertendo minutos para milissegundos
        // console.log(`Esperando por ${waitTime / 1000} segundos antes da próxima chamada.`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }

      limparCacheNpm();
      await runSearch(query, cidadeSorteada);
      return;
    } catch (error) {
      // console.error(`Erro na tentativa ${tentativas + 1}: ${error.message}`);
      tentativas++;
    }
  }
  if (tentativas === maxTentativas) {
    // console.log(`Atingido o número máximo de tentativas para a cidade. Ignorando: ${query}`);
  }
}


function limparCacheNpm() {
  exec('npm cache verify', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao verificar o cache: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro no comando: ${stderr}`);
      return;
    }
    //console.log(`Cache verificado com sucesso: ${stdout}`);
  });
}


// Uso da função index com o estado desejado
index("Monitoramento", "PB", 100000);
