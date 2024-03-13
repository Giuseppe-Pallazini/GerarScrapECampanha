import { formataNumero } from "./ValidateTelefone.mjs";

let result = [
    {
      placeId: 'ChIJ0bE6zolP4ZQRDi4-re7MruY',
      status: 'Aberto',
      category: 'Fornecedor de sistema de segurança',
      address: 'Coronel Alberto shimitt Edificio laura 10, sala o1',
      storeName: 'we trackers rastreamento',
      phone: '5511988749207',
      bizWebsite: "https://www.camarapinheiropreto.com.br",
      ratingText: '4,0 estrelas 2 comentários',
      stars: 4,
      numberOfReviews: 2,
      googleUrl: 'https://www.google.com/maps/place/AG+Monitoramento/data=!4m7!3m6!1s0x94e14f89ce3ab1d1:0xe6aecceead3e2e0e!8m2!3d-27.0048589!4d-51.153262!16s%2Fg%2F11gzn52hvy!19sChIJ0bE6zolP4ZQRDi4-re7MruY?authuser=0&hl=pt-BR&rclk=1'
    }
  ]
sendCampaignData(result, "'Monitoramento' São Domingos do Norte - ES");

export default async function sendCampaignData(result, query) {
    let nameCampaign = query.replace(/'/g, "");
    let whatsappId = "4ca207b4-3ad7-44ab-9d39-e5ef79713ffe"; // id da conexão
    let queueId = "dc45f8f5-ef57-45ba-881e-0c14dffd72f8"; // id da fila
    let messages = [];

    // Percorrer mensagens
    for (let i = 0; i < result.length; i++) {

        if (!(result[i].bizWebsite)) { // Caso não tenha site
            continue
        }

        if (result[i].bizWebsite.includes(".com")) { // Só entrará na campanha caso o site tenha ".com"

            if (!(result[i].phone)) { // se o número vier nulo
                continue
            }

            let name = await treatName(result[i].storeName);
            let number = await formataNumero(result[i].phone);
            messages.push({
                "name": name,
                "number": number,
                "body": "Bom dia, tudo joia? Aqui é o Willian encontrei a {{contactName}} pelo google. Gostaria de saber se a empresa de vocês é de monitoramento ou comercializa sistemas de segurança" // mensagem que será enviada aos clientes
            });
        }

        if (!messages) { // Caso não tenha telefone, nem site, passar para a próxima empresa
            continue
        }
    }

    if (messages.length === 0) { // Caso nenhuma empresa tenha telefone e site, passar para a próxima cidade
        return;
    }

    let campaignData = { // Estruturando objeto pra passar na API
        "name": nameCampaign,
        "whatsappId": whatsappId,
        "queueId": queueId,
        "messages": messages
    }

    
    let jsonString = JSON.stringify(campaignData).replace(/'/g, '"'); // Tornar name: em "name": e assim por diante
    console.log(jsonString)
    await generateCampaign(jsonString, nameCampaign);

    messages = []; // Zerar o messages para não duplicar na próxima cidade
}

// Tratativa para o nome que vem em maiúsculo e grande, deixar minusculo e as 2 primeiras palavras
async function treatName(name) {
    let words = name.toLowerCase().trim().split(/\s+/);
    let newName = words.slice(0,3)

    let wordsBlock = ['-', '.', '/', 'LTDA', 'inteligência', 'inteligente']


    if(wordsBlock.includes(newName[newName.length - 1])) { // verificando se a última palavra é "inútil"
        newName = words.slice(0,2);
        return newName.join(" ")

    }
    return newName.join(" ")
}


// Fazer o post para a APÌ contendo os dados
async function generateCampaign(jsonString, query) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0" // Token do portal

    fetch("https://api.beta.naty.app/api/v2/campaigns", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        },
        body: jsonString
    })
        .then(response => {
            // console.log("response: " + JSON.stringify(response))
            if (!response.ok) {
                response.json().then(errorData => {
                    throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(errorData));
                });
            }
            return response.json();
        })
        .then(data => {
            let campaignId = data.data.campaignId;
            suspendCampaign(campaignId, authToken, query) // A campanha ja começa iniciada, aqui irá pausa-la
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}


function suspendCampaign(campaignId, authToken, query) {

    try {
        fetch(`https://api.beta.naty.app/api/v2/campaigns/${campaignId}/suspend`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken // Token do portal da Naty
            }
        })
            .then(response => {
                if (!response.ok) {
                    response.json().then(errorData => {
                        throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(errorData));
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log("Campanha gerada e suspensa: ", query)
            })
    } catch (error) {

    }
}