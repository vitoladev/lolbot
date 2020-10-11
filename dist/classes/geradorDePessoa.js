"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDePessoa = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const gerador_1 = require("./gerador");
class GeradorDePessoa {
    // Le o JSON que tem todas as pessoas e retorna uma pessoa aleatória
    geraPessoa() {
        const pessoasjson = fs_1.default.readFileSync(path_1.resolve('.', 'config', 'pessoas.json'), 'utf8');
        const pessoas = JSON.parse(pessoasjson);
        const pessoaGerada = gerador_1.Gerador.geraAleatorio(pessoas);
        return pessoaGerada;
    }
}
exports.GeradorDePessoa = GeradorDePessoa;
