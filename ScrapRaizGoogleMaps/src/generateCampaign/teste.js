let result = [
    {
        "placeId": "ChIJI0lGiHHU85QRqfuRyNoKUe8",
        "status": "Aberto",
        "category": "Empresa de segurança",
        "address": "R. Pedro Ivo, 619",
        "storeName": "INVIOLÁVEL CASCAVEL - MONITORAMENTO DE ALARMES",
        "phone": "5511988749207",
        "bizWebsite": "http://www.inviolavel.com/",
        "ratingText": "4,4 estrelas 16 comentários",
        "stars": 4.4,
        "numberOfReviews": 16,
        "googleUrl": "https://www.google.com/maps/place/Inviol%C3%A1vel+Cascavel+-+Monitoramento+de+Alarmes/data=!4m7!3m6!1s0x94f3d47188464923:0xef510adac891fba9!8m2!3d-24.9540181!4d-53.4402885!16s%2Fg%2F1tj1t7jy!19sChIJI0lGiHHU85QRqfuRyNoKUe8?authuser=0&hl=pt-BR&rclk=1"
    }
];



export default function sendCampaignData(result, query) {
    let nameCampaign = query;
    let whatsappId = "69f663a7-aae7-4ef0-b755-55ad6c60f858"; // id da conexão
    let queueId = "526cfef4-44c9-4ab5-9af4-041b713aa977"; // id da fila
    let messages = [];


    // Adicionando as mensagens
    for (let i = 0; i < result.length; i++) {
        messages.push({
            "number": result[i].phone,
            "name": result[i].storeName,
            "body": "Teste Campanha Scrap" // mensagem que será enviada aos clientes
        });
    }
    
    // Estruturando objeto pra passar na API
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
function generateCampaign(jsonString) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0" // Token do portal


    fetch("https://api.beta.naty.app/api/v2/campaigns", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken // Token do portal da Naty
        },
        body: jsonString
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
        let campaignId = data.data.campaignId;
        suspendCampaign(campaignId, authToken) // A campanha ja começa iniciada, aqui irá pausa-la
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}


function suspendCampaign(campaignId, authToken) {
    console.log("campaignId: " + campaignId)
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
        console.log(data)
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}


sendCampaignData(result, '"Monitoramento" Cascavel - PR');