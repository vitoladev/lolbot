"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeTime = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const gerador_1 = require("./gerador");
class GeradorDeTime {
    // Le o JSON que tem todos os times e retorna uma pessoa aleatória
    geraTime() {
        const timesjson = fs_1.default.readFileSync(path_1.resolve('.', 'config', 'times.json'), 'utf8');
        const times = JSON.parse(timesjson);
        const timeGerado = gerador_1.Gerador.geraAleatorio(times);
        return timeGerado;
    }
}
exports.GeradorDeTime = GeradorDeTime;
