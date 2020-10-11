import fs from 'fs';
import { resolve } from 'path';
import { Gerador } from './gerador';

export class GeradorDeLiga {
  // Le o JSON que tem todas as ligas e retorna uma liga aleatória
  geraLiga(): string {
    const ligasjson = fs.readFileSync(
      resolve('.', 'config', 'ligas.json'),
      'utf8',
    );
    const ligas = JSON.parse(ligasjson);
    const ligaGerada = Gerador.geraAleatorio(ligas);
    return ligaGerada;
  }
}
