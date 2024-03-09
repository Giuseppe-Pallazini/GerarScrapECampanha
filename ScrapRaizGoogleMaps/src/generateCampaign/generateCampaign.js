let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0"


async function aaa() {
  await fetch("https://api.beta.naty.app/api/v2/campaigns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authToken // Token do portal da Naty
    },
    body: {"name": "Monitoramento", "whatsappId": "69f663a7-aae7-4ef0-b755-55ad6c60f858", "queueId": "526cfef4-44c9-4ab5-9af4-041b713aa977", "messages": [{ "number": "554599918407", "name": "INVIOLÁVEL CASCAVEL - MONITORAMENTO DE ALARMES", "body": "Teste Campanha Scrap" }, { "number": "556692501020", "name": "EF. MONITORAMENTO", "body": "Teste Campanha Scrap" }, { "number": "5511988749207", "name": "ALARMES ATLANTA", "body": "Teste Campanha Scrap" }] }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(response));
      }
      return response.json();
    })
    .then(data => {
      console.log("Dados da campanha enviados com sucesso:", data);
    })
    .catch(error => {
      console.error("Erro:", error);
    });
}
aaa()