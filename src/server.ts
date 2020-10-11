import { CronJob } from 'cron';
import express from 'express';
import { GeradorDeManchetes } from './classes/geradorDeManchetes';
import { tweetar } from './services/twitter';
import { DiscordBot } from './services/discord';
const app = express();

app.listen(3000, () => {
  console.log('Bot rodando na porta 3000');
});

DiscordBot();

tweetar(); // Tweeta quando inicia o bot

// Tweeta de uma em uma hora
setInterval((): void => {
  tweetar();
}, 360000);
