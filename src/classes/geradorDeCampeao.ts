import fs from 'fs';
import { resolve } from 'path';
import { Gerador } from './gerador';

export class GeradorDeCampeao {
  // Le o JSON que tem todos os campeões e retorna um campeão aleatório
  geraCampeao(): string {
    const campeoesJson = fs.readFileSync(
      resolve('.', 'config', 'campeoes.json'),
      'utf8',
    );
    const campeoes = JSON.parse(campeoesJson);
    const campeaoGerado = Gerador.geraAleatorio(campeoes);
    return campeaoGerado;
  }
}
