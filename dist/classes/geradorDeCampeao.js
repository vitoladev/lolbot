"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeCampeao = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const gerador_1 = require("./gerador");
class GeradorDeCampeao {
    // Le o JSON que tem todos os campeões e retorna um campeão aleatório
    geraCampeao() {
        const campeoesJson = fs_1.default.readFileSync(path_1.resolve('.', 'config', 'campeoes.json'), 'utf8');
        const campeoes = JSON.parse(campeoesJson);
        const campeaoGerado = gerador_1.Gerador.geraAleatorio(campeoes);
        return campeaoGerado;
    }
}
exports.GeradorDeCampeao = GeradorDeCampeao;
