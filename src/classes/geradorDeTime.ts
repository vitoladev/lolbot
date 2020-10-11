import { resolve } from 'path';
import fs from 'fs';
import { Gerador } from './gerador';

export class GeradorDeTime {
  // Le o JSON que tem todos os times e retorna um time aleatório
  geraTime(): string {
    const timesjson = fs.readFileSync(
      resolve('.', 'config', 'times.json'),
      'utf8',
    );
    const times = JSON.parse(timesjson);
    const timeGerado = Gerador.geraAleatorio(times);
    return timeGerado;
  }
}
