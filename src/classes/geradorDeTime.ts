import { resolve } from 'path';
import fs from 'fs';
import { Gerador } from './gerador';

export class GeradorDeTime extends Gerador {
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
