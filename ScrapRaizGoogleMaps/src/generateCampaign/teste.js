let result = [
    {
        "placeId": "ChIJI0lGiHHU85QRqfuRyNoKUe8",
        "status": "Aberto",
        "category": "Empresa de segurança",
        "address": "R. Pedro Ivo, 619",
        "storeName": "INVIOLÁVEL CASCAVEL - MONITORAMENTO DE ALARMES",
        "phone": "554599918407",
        "bizWebsite": "http://www.inviolavel.com/",
        "ratingText": "4,4 estrelas 16 comentários",
        "stars": 4.4,
        "numberOfReviews": 16,
        "googleUrl": "https://www.google.com/maps/place/Inviol%C3%A1vel+Cascavel+-+Monitoramento+de+Alarmes/data=!4m7!3m6!1s0x94f3d47188464923:0xef510adac891fba9!8m2!3d-24.9540181!4d-53.4402885!16s%2Fg%2F1tj1t7jy!19sChIJI0lGiHHU85QRqfuRyNoKUe8?authuser=0&hl=pt-BR&rclk=1"
    },
    {
        "placeId": "ChIJcQezdALX85QR4xPPk9qX55I",
        "status": "Aberto",
        "category": "Empresa de segurança",
        "address": "Av. Antônio Kucinski, 231B",
        "storeName": "EF. MONITORAMENTO",
        "phone": "556692501020",
        "bizWebsite": "https://efmonitoramento.negocio.site/",
        "ratingText": "5,0 estrelas 6 comentários",
        "stars": 5,
        "numberOfReviews": 6,
        "googleUrl": "https://www.google.com/maps/place/EF.+monitoramento/data=!4m7!3m6!1s0x94f3d70274b30771:0x92e797da93cf13e3!8m2!3d-24.9344997!4d-53.490551!16s%2Fg%2F11fk7prkb1!19sChIJcQezdALX85QR4xPPk9qX55I?authuser=0&hl=pt-BR&rclk=1"
    },
    {
        "placeId": "ChIJtRhEn3rU85QRIC9_s33O98U",
        "status": "Aberto",
        "category": "Fornecedor de sistema de segurança",
        "address": "R. Paraná, 1241",
        "storeName": "ALARMES ATLANTA",
        "phone": "5511988749207",
        "bizWebsite": "http://www.amarelasinternet.com/atlantasistemaeletronicodeseguranca",
        "ratingText": "4,6 estrelas 52 comentários",
        "stars": 4.6,
        "numberOfReviews": 52,
        "googleUrl": "https://www.google.com/maps/place/Alarmes+Atlanta/data=!4m7!3m6!1s0x94f3d47a9f4418b5:0xc5f7ce7db37f2f20!8m2!3d-24.9479075!4d-53.4437378!16s%2Fg%2F1t_h_45l!19sChIJtRhEn3rU85QRIC9_s33O98U?authuser=0&hl=pt-BR&rclk=1"
    }
];



export default function sendCampaignData(result, query) {
    let nameCampaign = query;
    let whatsappId = "69f663a7-aae7-4ef0-b755-55ad6c60f858";
    let queueId = "526cfef4-44c9-4ab5-9af4-041b713aa977"
    let messages = [];


    // Adicionando as mensagens
    for (let i = 0; i < result.length; i++) {
        messages.push({
            "number": result[i].phone,
            "name": result[i].storeName,
            "body": "Teste Campanha Scrap"
        });
    }
    
    let campaignData = {
        "name": nameCampaign,
        "whatsappId": whatsappId,
        "queueId": queueId,
        "messages": messages
    }

    
    // Tornar name: em "name": e assim por diante
    let jsonString = JSON.stringify(campaignData).replace(/'/g, '"');

    generateCampaign(jsonString);
}


// Fazer o post para a APÌ contendo os dados
function generateCampaign(campaignData) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0"

    fetch("https://api.beta.naty.app/api/v2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken // Token do portal da Naty
        },
        body: campaignData
    })
    .then(response => {
        return console.log(response.json)
        // if (!response.ok) {
        //     throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(response));
        // }
        return response.json();
    })
    .then(data => {
        console.log("Dados da campanha enviados com sucesso:", data);
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}


sendCampaignData(result, "Monitoramento")