"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterBot = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const twitter_1 = __importDefault(require("twitter"));
const geradorDeManchetes_1 = require("../classes/geradorDeManchetes");
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
// Credenciais da API do Twitter
const client = new twitter_1.default({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret,
});
async function tweetar() {
    try {
        // Pega uma nova manchete aleatória
        const gerador = new geradorDeManchetes_1.GeradorDeManchetes();
        const novoTweet = gerador.geraManchete();
        const tweet = {
            status: novoTweet,
        };
        console.log('tweet -> ', tweet);
        // Posta no twitter a nova manchete
        await client.post('statuses/update', tweet);
        // Salva a manchete no log.json
        const data = new Date();
        let logJson = fs_1.default.readFileSync(path_1.resolve('..', '..', 'config', 'log.json'), 'utf8');
        const log = JSON.parse(logJson);
        const novoLog = [data.toLocaleString('pt-br'), novoTweet];
        log.push(novoLog);
        logJson = JSON.stringify(log, null, 2);
        fs_1.default.appendFileSync(path_1.resolve('..', '..', 'config', 'log.json'), logJson, {
            encoding: 'utf-8',
            flag: 'w',
        });
    }
    catch (e) {
        console.log('Erro: ', e);
    }
}
async function TwitterBot() {
    await tweetar(); // Tweeta quando inicia o bot
    const horaEmMs = 3600000;
    // Tweeta de uma em uma hora
    setInterval(async () => {
        await tweetar();
    }, horaEmMs);
}
exports.TwitterBot = TwitterBot;
