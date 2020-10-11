import express from 'express';
import { tweetar } from './services/twitter';
import { DiscordBot } from './services/discord';
const app = express();

app.listen(3000, () => {
  console.log('Bot rodando na porta 3000');
});

DiscordBot();

async function TwitterBot(): Promise<void> {
  await tweetar(); // Tweeta quando inicia o bot

  // Tweeta de uma em uma hora
  setInterval(async (): Promise<void> => {
    await tweetar();
  }, 3600000);
}

TwitterBot();
