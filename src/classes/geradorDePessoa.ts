import fs from 'fs';
import { resolve } from 'path';
import { Gerador } from './gerador';

export class GeradorDePessoa {
  // Le o JSON que tem todas as pessoas e retorna uma pessoa aleatória
  geraPessoa(): string {
    const pessoasjson = fs.readFileSync(
      resolve('.', 'config', 'pessoas.json'),
      'utf8',
    );
    const pessoas = JSON.parse(pessoasjson);
    const pessoaGerada = Gerador.geraAleatorio(pessoas);
    return pessoaGerada;
  }
}
