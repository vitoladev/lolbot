import express from 'express';
import { TwitterBot } from './services/twitter';
import { DiscordBot } from './services/discord';
const app = express();

app.listen(3000, () => {
  console.log('Bot rodando na porta 3000');
});

DiscordBot();
TwitterBot();
