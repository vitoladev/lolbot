import Discord, { Message } from 'discord.js';
import { GeradorDeManchetes } from '../classes/geradorDeManchetes';
import fs from 'fs';
import { resolve } from 'path';

export function DiscordBot(): void {
  const bot = new Discord.Client();

  bot.on('ready', () => {
    console.log(
      `Discord Bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`,
    );

    console.log(`Serving ${bot.guilds.cache.size} servers`);
    bot.user.setActivity(
      'Gerando manchetes aleatórias sobre o mundo competitivo de LoL',
    );
  });

  bot.on('message', async (message: Message) => {
    // This event will run on every single message received, from any channel or DM.

    try {
      // ignora outros bots
      if (message.author.bot) return;

      // ignora mensagens que não começam com o prefixo do bot que é +
      if (!message.content.startsWith('+')) return;

      // Separa a mensagem em um array separado por espaço
      const args = message.content.slice('+'.length).trim().split(/ +/g);
      const command: string = args.shift().toLowerCase();
      if (command === 'help') {
        message.channel.send(
          `pra adicionar uma manchete pro bot usa esse padrão: \npessoa = $PESSOA, time = $TIME e liga = $LIGA.\n exemplo: "+novamanchete $PESSOA, da $TIME, admite que não esperava vencer a $TIME"`,
        );
      }
      if (command === 'generate') {
        // Gera uma nova manchete
        const mancheteGerada = new GeradorDeManchetes().geraManchete();
        message.channel.send(mancheteGerada);
      }
      if (command === 'novamanchete') {
        // Adiciona uma nova manchete ao bot
        const novaManchete = message.content.slice(13).trim();
        console.log(novaManchete);

        const manchetesjson = fs.readFileSync(
          resolve('..', 'config', 'manchetes.json'),
          'utf8',
        );
        const manchetes = JSON.parse(manchetesjson);
        const aaa = Object.keys(manchetes).length;

        manchetes[aaa] = novaManchete;

        const jsondnvporra = JSON.stringify(manchetes, null, 2);
        fs.appendFileSync('../config/manchetes.json', jsondnvporra, {
          encoding: 'utf-8',
          flag: 'w',
        });
        message.channel.send('Manchete adicionada com sucesso ao bot!');
      }
      if (command === 'novotime') {
        // Adiciona um novo time ao bot
        const newTeam = message.content.slice(10).trim();
        const teamsjson = fs.readFileSync(
          resolve('..', 'config', 'times.json'),
          'utf8',
        );
        const times = JSON.parse(teamsjson);
        const aaa = Object.keys(times).length;

        times[aaa] = newTeam;

        const jsondnvporra = JSON.stringify(times, null, 2);
        fs.appendFileSync('../config/times.json', jsondnvporra, {
          encoding: 'utf-8',
          flag: 'w',
        });

        message.channel.send(`${newTeam} adicionada com sucesso ao bot!`);
      }
      if (command === 'novapessoa') {
        // Adiciona uma nova pessoa ao bot
        const newPerson = message.content.slice(11).trim();

        const personsjson = fs.readFileSync(
          resolve('..', 'config', 'pessoas.json'),
          'utf8',
        );
        const person = JSON.parse(personsjson);
        const aaa = Object.keys(person).length;

        person[aaa] = newPerson;

        const jsondnvporra = JSON.stringify(person, null, 2);
        fs.appendFileSync('../config/pessoas.json', jsondnvporra, {
          encoding: 'utf-8',
          flag: 'w',
        });
        message.channel.send(`${newPerson} adicionado com sucesso ao bot!`);
      }

      if (command === 'info') {
        // Mostra o total de quantas pessoas, times, ligas e manchetes o bot tem
        const pessoasJson = fs.readFileSync(
          resolve('.', 'config', 'pessoas.json'),
          'utf8',
        );
        const timesJson = fs.readFileSync(
          resolve('.', 'config', 'times.json'),
          'utf8',
        );
        const ligasJson = fs.readFileSync(
          resolve('.', 'config', 'ligas.json'),
          'utf8',
        );
        const manchetesJson = fs.readFileSync(
          resolve('.', 'config', 'manchetes.json'),
          'utf8',
        );
        const pessoas = JSON.parse(pessoasJson);
        const times = JSON.parse(timesJson);
        const ligas = JSON.parse(ligasJson);
        const manchetes = JSON.parse(manchetesJson);
          
        const qtdPessoas = Object.keys(pessoas).length;
        const qtdTimes = Object.keys(times).length;
        const qtdLigas = Object.keys(ligas).length;
        const qtdManchetes = Object.keys(manchetes).length;

        const mensagem = `O bot atualmente tem: \n ${qtdManchetes} manchetes
         ${qtdTimes} times 
         ${qtdLigas} ligas 
         ${qtdPessoas} pessoas`;
        console.log(mensagem);
        message.channel.send(mensagem);
      }
    } catch (e) {
      console.log(e);
    }
  });
  // Token do bot da API do discord
  bot.login(process.env.BOT_TOKEN);
}
