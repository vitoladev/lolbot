import { resolve } from 'path';
import fs from 'fs';
import { Gerador } from './gerador';

export class GeradorDeTime {
<<<<<<< HEAD
  // Le o JSON que tem todos os times e retorna um time aleatório
=======
  // Le o JSON que tem todos os times e retorna uma pessoa aleatória
>>>>>>> a9964c2fead3e27f96b3eeb3936960650fbb8f93
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
