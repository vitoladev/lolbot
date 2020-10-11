import fs from 'fs';
import { resolve } from 'path';
import { Gerador } from './gerador';

export class GeradorDePessoa extends Gerador {
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
