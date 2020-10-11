"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerador = void 0;
class Gerador {
    // Gera um número aleatório entre 0 e a quantidade de pessoas/ligas/times/manchetes
    static aleatorio(max) {
        const min = Math.ceil(0);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // retorna o(a) pessoa/time/liga/manchete aleatória
    static geraAleatorio(dados) {
        const quantidade = Object.keys(dados).length - 1;
        const dado = dados[Gerador.aleatorio(quantidade)];
        return dado;
    }
}
exports.Gerador = Gerador;
