<?php

$request = new HttpRequest();
$request->setUrl('https://api.beta.naty.app/api/v1/messages');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer TOKEN_CLIENTE'
]);

$request->setBody('{
  "whatsappId": "ID_DA_CONEXAO",
  "messages": [
    {
      "number": "NUMERO_CLIENTE",
      "name": "NOME_CLIENTE",
      "body": "MENSAGEM_A_SER_ENVIADA"
    }
  ]
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}