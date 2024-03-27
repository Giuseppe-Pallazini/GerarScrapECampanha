import { formataNumero } from "./ValidateTelefone.mjs";

// let result = [
//   {
//     placeId: 'ChIJZQh4RoBz8JQRdTHN6ib9V7o',
//     status: 'Aberto',
//     category: 'Fornecedor de sistema de segurança',
//     address: 'R. Bolivia, 243',
//     storeName: 'MASTER MONITORAMENTO 24 HORAS, FRANCISCO BELTRAO - PR',
//     phone: '(46) 99940-2916',
//     bizWebsite: null,
//     ratingText: '4,5 estrelas 8 comentários',
//     stars: 4.5,
//     numberOfReviews: 8,
//     googleUrl: 'https://www.google.com/maps/place/MASTER+MONITORAMENTO+24+HORAS,+FRANCISCO+BELTRAO+-+PR/data=!4m7!3m6!1s0x94f0738046780865:0xba57fd26eacd3175!8m2!3d-26.0660408!4d-53.0461853!16s%2Fg%2F11rwlpysh0!19sChIJZQh4RoBz8JQRdTHN6ib9V7o?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJyezJUsRy8JQR38n-Zz-58ko',
//     status: 'Aberto',
//     category: 'Serviço de segurança',
//     address: 'R. Florianópolis, 530',
//     storeName: 'INVIOLÁVEL FRANCISCO BELTRÃO - MONITORAMENTO',
//     phone: '(46) 3524-5040',
//     bizWebsite: 'https://inviolavel.com/franquias/francisco-beltrao-pr/',
//     ratingText: '4,6 estrelas 58 comentários',
//     stars: 4.6,
//     numberOfReviews: 58,
//     googleUrl: 'https://www.google.com/maps/place/Inviol%C3%A1vel+Francisco+Beltr%C3%A3o+-+Monitoramento/data=!4m7!3m6!1s0x94f072c452c9ecc9:0x4af2b93f67fec9df!8m2!3d-26.0743691!4d-53.0595945!16s%2Fg%2F1tdzmql5!19sChIJyezJUsRy8JQR38n-Zz-58ko?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJ7XZv_Hpt8JQRXHWGsH8KS7Q',
//     status: 'Aberto',
//     category: 'Loja de alarmes antifurto',
//     address: 'Av. Antonio Silvio Barbieri, 2346',
//     storeName: 'INVIOSAT MONITORAMENTO DE ALARMES RESIDÊNCIAIS',
//     phone: '(46) 3524-4148',
//     bizWebsite: null,
//     ratingText: '4,6 estrelas 15 comentários',
//     stars: 4.6,
//     numberOfReviews: 15,
//     googleUrl: 'https://www.google.com/maps/place/Inviosat+Monitoramento+de+Alarmes+Resid%C3%AAnciais/data=!4m7!3m6!1s0x94f06d7afc6f76ed:0xb44b0a7fb086755c!8m2!3d-26.0518358!4d-53.0523092!16s%2Fg%2F1pv5xblkw!19sChIJ7XZv_Hpt8JQRXHWGsH8KS7Q?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJcWtTSisN8JQRcW5aMDVKjog',
//     status: 'Aberto',
//     category: 'Segurança',
//     address: 'R. Maranhão, 880',
//     storeName: 'SENTINELA MONITORAMENTO',
//     phone: '(46) 3055-9200',
//     bizWebsite: 'http://www.sentinela.com.br/',
//     ratingText: '4,4 estrelas 9 comentários',
//     stars: 4.4,
//     numberOfReviews: 9,
//     googleUrl: 'https://www.google.com/maps/place/Sentinela+Monitoramento/data=!4m7!3m6!1s0x94f00d2b4a536b71:0x888e4a35305a6e71!8m2!3d-26.0794702!4d-53.0452631!16s%2Fg%2F1tz72j_x!19sChIJcWtTSisN8JQRcW5aMDVKjog?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJgTFXFqZy8JQRKBLItrHT96k',
//     status: 'Aberto',
//     category: 'Empresa de segurança',
//     address: 'R. Catanduvas, 307',
//     storeName: 'PROTEC MONITORAMENTO',
//     phone: '(46) 3523-6123',
//     bizWebsite: null,
//     ratingText: '3,7 estrelas 3 comentários',
//     stars: 3.7,
//     numberOfReviews: 3,
//     googleUrl: 'https://www.google.com/maps/place/Protec+Monitoramento/data=!4m7!3m6!1s0x94f072a616573181:0xa9f7d3b1b6c81228!8m2!3d-26.0500967!4d-53.0574958!16s%2Fg%2F11gf0v_y77!19sChIJgTFXFqZy8JQRKBLItrHT96k?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJ704NVsRy8JQRjZdmpW4yP0g',
//     status: 'Aberto',
//     category: 'Serviço de segurança',
//     address: 'R. Florianópolis, 290',
//     storeName: 'INVIOLÁVEL SEGURANÇA',
//     phone: null,
//     bizWebsite: null,
//     ratingText: '4,0 estrelas 2 comentários',
//     stars: 4,
//     numberOfReviews: 2,
//     googleUrl: 'https://www.google.com/maps/place/Inviol%C3%A1vel+Seguran%C3%A7a/data=!4m7!3m6!1s0x94f072c4560d4eef:0x483f326ea566978d!8m2!3d-26.0735547!4d-53.0572455!16s%2Fg%2F1td7_7ff!19sChIJ704NVsRy8JQRjZdmpW4yP0g?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJV2GJkChz8JQRQd7cCH9Tc-Q',
//     status: 'Aberto',
//     category: 'Escritório da empresa',
//     address: 'R. Ten. Camargo, 1773',
//     storeName: 'ESCRITÓRIO LINK MONITORAMENTO BELTRÃO',
//     phone: 'R. Ten. Camargo, 1773',
//     bizWebsite: null,
//     ratingText: null,
//     stars: null,
//     numberOfReviews: null,
//     googleUrl: 'https://www.google.com/maps/place/Escrit%C3%B3rio+Link+Monitoramento+Beltr%C3%A3o/data=!4m7!3m6!1s0x94f0732890896157:0xe473537f08dcde41!8m2!3d-26.0782014!4d-53.0529478!16s%2Fg%2F11gtymnmm1!19sChIJV2GJkChz8JQRQd7cCH9Tc-Q?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJFScZwIdz8JQRCC9uRc42dpA',
//     status: 'Aberto',
//     category: 'Empresa de segurança',
//     address: 'R. Ver. Romeu Lauro Werlang, 1987',
//     storeName: 'MORAIS TECNOLOGIA EM SEGURANÇA',
//     phone: '(46) 3523-5010',
//     bizWebsite: null,
//     ratingText: '4,5 estrelas 2 comentários',
//     stars: 4.5,
//     numberOfReviews: 2,
//     googleUrl: 'https://www.google.com/maps/place/Morais+Tecnologia+em+Seguran%C3%A7a/data=!4m7!3m6!1s0x94f07387c0192715:0x907636ce456e2f08!8m2!3d-26.0861454!4d-53.0473432!16s%2Fg%2F11hyjmccdh!19sChIJFScZwIdz8JQRCC9uRc42dpA?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJWya1f8dt8JQREAauCpoqupQ',
//     status: 'Aberto',
//     category: 'Empresa de segurança',
//     address: 'R. Acre, 771',
//     storeName: 'SANT SEGURANÇA',
//     phone: '(46) 3524-9812',
//     bizWebsite: 'https://santseguranca.com.br/',
//     ratingText: '4,7 estrelas 12 comentários',
//     stars: 4.7,
//     numberOfReviews: 12,
//     googleUrl: 'https://www.google.com/maps/place/Sant+Seguran%C3%A7a/data=!4m7!3m6!1s0x94f06dc77fb5265b:0x94ba2a9a0aae0610!8m2!3d-26.0414808!4d-53.0660415!16s%2Fg%2F11pysj70vm!19sChIJWya1f8dt8JQREAauCpoqupQ?authuser=0&hl=pt-BR&rclk=1'
//   },
//   {
//     placeId: 'ChIJk48fYjlz8JQReEZbPvN69bg',
//     status: 'Aberto',
//     category: 'Fornecedor de sistema de segurança',
//     address: 'Av. Luiz Antônio Faedo, 255',
//     storeName: 'BELTECH SISTEMAS DE SEGURANÇA E AUTOMAÇÕES',
//     phone: '(46) 99118-6906',
//     bizWebsite: null,
//     ratingText: '5,0 estrelas 1 comentários',
//     stars: 5,
//     numberOfReviews: 1,
//     googleUrl: 'https://www.google.com/maps/place/Beltech+Sistemas+de+Seguran%C3%A7a+e+Automa%C3%A7%C3%B5es/data=!4m7!3m6!1s0x94f07339621f8f93:0xb8f57af33e5b4678!8m2!3d-26.0747775!4d-53.0537224!16s%2Fg%2F11trg9r44y!19sChIJk48fYjlz8JQReEZbPvN69bg?authuser=0&hl=pt-BR&rclk=1'
//   }
// ]
// sendCampaignData(result, "'Monitoramento' Francisco Beltrão - PR");

let date = new Date;
var dateNow = date.getHours() + ":" + date.getMinutes()

export default async function sendCampaignData(result, query) {
    let nameCampaign = query.replace(/'/g, "");
    let whatsappId = "4ca207b4-3ad7-44ab-9d39-e5ef79713ffe";
    let queueId = "dc45f8f5-ef57-45ba-881e-0c14dffd72f8";
    let messages = [];

    // Percorrer o resultado do scap
    for (let i = 0; i < result.length; i++) {


        if (!(result[i].bizWebsite)) { // Caso não tenha site
            continue
        }


        if (result[i].bizWebsite.includes(".com")) { 
            if (result[i].bizWebsite.includes("instagram")){
                continue;
            }
            

            if (!(result[i].phone)) {
                continue
            }

            let name = await treatName(result[i].storeName); // tratativa do nome
            let number = await formataNumero(result[i].phone); // formatar número padrão ANATEL

            if(!number) { // Caso tenha telefone porém inválido (ex: 5532)
                continue
            }

            messages.push({
                "name": name,
                "number": number,
                "mediaKey": "38f945a7-c6ba-43e2-a516-9fc33a20a1aa_WhatsApp Image 2024-03-22 at 11.23.32.jpeg",
                "mediaType": "image",
                "body": "Olá aqui é o Willian! Que tal enviar uma mensagem de Páscoa para todos os seus clientes de maneira automática? Com a ajuda da Secretaria Naty, isso é totalmente possível! Quer saber como? 🐰"
            });
        }

        if (!messages) { // Caso não tenha telefone, nem site, passar para a próxima empresa
            continue
        }
    }

    if (messages.length === 0) { // Caso NENHUMA empresa tenha telefone e site, passar para a próxima cidade
        console.log("Nenhum dado gerado em: " + query)
        console.log(" ---------- / ---------- ");
        return;
    }

    let campaignData = { // Estruturando objeto pra passar na API
        "name": nameCampaign,
        "whatsappId": whatsappId,
        "queueId": queueId,
        "messages": messages
    }

    
    let jsonString = JSON.stringify(campaignData).replace(/'/g, '"'); // Tornar name: em "name": e assim por diante
    console.log(jsonString);
    await generateCampaign(jsonString, nameCampaign);

    messages = []; // Zerar o messages para não duplicar na próxima cidade
}



// Tratativa para o nome que vem em maiúsculo e grande, deixar minusculo e as 2 primeiras palavras
async function treatName(name) {
    let words = name.toLowerCase().trim().split(/\s+/);
    let newName = words.slice(0,3);

    let wordsBlock = ['-', '.', '/', 'LTDA', 'inteligência', 'inteligente', 'e', '(', 'de'];


    if(wordsBlock.includes(newName[newName.length - 1])) { // verificando se a última palavra é "inútil"
        newName = words.slice(0,2);
        return newName.join(" ");

    }
    return newName.join(" ");
}



// Fazer o post para a APÌ contendo os dados
async function generateCampaign(jsonString, query) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0" // Token do portal

    fetch("https://api.beta.naty.app/api/v2/campaigns", { // Gerando a campanha
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        },
        body: jsonString
    })
        .then(response => {
            if (!response.ok) {
                response.json().then(errorData => {
                    throw new Error("Erro ao enviar dados da campanha: ");
                });
            }
            return response.json();
        })
        .then(data => {
            let campaignId = data.data.campaignId;
            suspendCampaign(campaignId, authToken, query) // A campanha ja começa iniciada, aqui irá pausa-la
        })
        .catch(error => {
            console.error("Erro:" + error + ' (' + dateNow + 'h' + ')');
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
                        console.log("Erro ao enviar dados da campanha: ");
                        return
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log("Campanha gerada e suspensa: " + query + ' (' + dateNow + 'h' + ')');
                console.log(" ---------- / ---------- ");
            })
    }
    finally {
        let querrys = [];
        querrys.push(query);
        console.log("Querys até o momento: " + querrys);
    }
}