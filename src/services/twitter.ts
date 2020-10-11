import dotenv from 'dotenv';
dotenv.config();
import Twitter from 'twitter';
import { GeradorDeManchetes } from '../classes/geradorDeManchetes';

import fs from 'fs';

// Credenciais da API do Twitter
const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

console.log(client);

export async function tweetar(): Promise<void> {
  try {
    // Pega uma nova manchete aleatória
    const gerador = new GeradorDeManchetes();
    const novoTweet = gerador.geraManchete();
    const tweet = {
      status: novoTweet,
    };
    console.log('tweet -> ', tweet);
    /*
    // Posta no twitter a nova manchete
    await client.post('statuses/update', tweet);

    // Salva a manchete no log.json
    const data = new Date();
    let logJson = fs.readFileSync('../config/log.json', 'utf8');
    const log = JSON.parse(logJson);
    const novoLog = [data.toLocaleString('pt-br'), novoTweet];
    log.push(novoLog);
    logJson = JSON.stringify(log, null, 2);
    fs.appendFileSync('../config/log.json', logJson, {
      encoding: 'utf-8',
      flag: 'w',
    });
    */
  } catch (e) {
    console.log('Erro: ', e);
  }
}
