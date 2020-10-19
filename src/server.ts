import express from 'express';
<<<<<<< HEAD
import { TwitterBot } from './services/twitter';
=======
import { tweetar } from './services/twitter';
>>>>>>> a9964c2fead3e27f96b3eeb3936960650fbb8f93
import { DiscordBot } from './services/discord';
const app = express();

app.listen(3000, () => {
  console.log('Bot rodando na porta 3000');
});

DiscordBot();
<<<<<<< HEAD
=======

async function TwitterBot(): Promise<void> {
  await tweetar(); // Tweeta quando inicia o bot

  // Tweeta de uma em uma hora
  setInterval(async (): Promise<void> => {
    await tweetar();
  }, 3600000);
}

>>>>>>> a9964c2fead3e27f96b3eeb3936960650fbb8f93
TwitterBot();
