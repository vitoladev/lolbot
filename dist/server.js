"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const twitter_1 = require("./services/twitter");
const discord_1 = require("./services/discord");
const app = express_1.default();
app.listen(3000, () => {
    console.log('Bot rodando na porta 3000');
});
discord_1.DiscordBot();
twitter_1.TwitterBot();
