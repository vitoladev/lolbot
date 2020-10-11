"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeManchetes = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const gerador_1 = require("./gerador");
const geradorDeLiga_1 = require("./geradorDeLiga");
const geradorDePessoa_1 = require("./geradorDePessoa");
const geradorDeTime_1 = require("./geradorDeTime");
class GeradorDeManchetes {
    constructor() {
        // Composição pra delegar a função de gerar times, pessoas e ligas para as outras classes
        this.time = new geradorDeTime_1.GeradorDeTime();
        this.pessoa = new geradorDePessoa_1.GeradorDePessoa();
        this.liga = new geradorDeLiga_1.GeradorDeLiga();
    }
    geraManchete() {
        const manchetesjson = fs_1.default.readFileSync(path_1.resolve('.', 'config', 'manchetes.json'), 'utf8');
        const manchetes = JSON.parse(manchetesjson);
        let manchete = gerador_1.Gerador.geraAleatorio(manchetes);
        const pessoas = manchete.match(/PESSOA/g);
        // se tiver pessoa na manchete gerada substitui a váriavel $PESSOA usada no JSON pela pessoa gerada.
        if (pessoas !== null) {
            for (let i = 0; i < pessoas.length; i++) {
                manchete = manchete.replace('$PESSOA', `${this.pessoa.geraPessoa()}`);
            }
        }
        const ligas = manchete.match(/LIGA/g);
        // se tiver liga na manchete gerada substitui a váriavel $LIGA usada no JSON pela pessoa gerada.
        if (ligas !== null) {
            for (let i = 0; i < ligas.length; i++) {
                manchete = manchete.replace('$LIGA', `${this.liga.geraLiga()}`);
            }
        }
        const times = manchete.match(/TIME/g);
        // se tiver time na manchete gerada substitui a váriavel $TIME usada no JSON pela pessoa gerada.
        if (times !== null) {
            for (let i = 0; i < times.length; i++) {
                manchete = manchete.replace('$TIME', `${this.time.geraTime()}`);
            }
        }
        return manchete;
    }
}
exports.GeradorDeManchetes = GeradorDeManchetes;
