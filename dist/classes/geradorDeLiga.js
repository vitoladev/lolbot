"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeLiga = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const gerador_1 = require("./gerador");
class GeradorDeLiga {
    // Le o JSON que tem todas as ligas e retorna uma liga aleatória
    geraLiga() {
        const ligasjson = fs_1.default.readFileSync(path_1.resolve('.', 'config', 'ligas.json'), 'utf8');
        const ligas = JSON.parse(ligasjson);
        const ligaGerada = gerador_1.Gerador.geraAleatorio(ligas);
        return ligaGerada;
    }
}
exports.GeradorDeLiga = GeradorDeLiga;
