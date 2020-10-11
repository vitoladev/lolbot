import fs from 'fs';
import { resolve } from 'path';
import { Gerador } from './gerador';
import { GeradorDeLiga } from './geradorDeLiga';
import { GeradorDePessoa } from './geradorDePessoa';
import { GeradorDeTime } from './geradorDeTime';
type Manchete = { [key: string]: string };

export class GeradorDeManchetes {
  // Composição pra delegar a função de gerar times, pessoas e ligas para as outras classes
  private readonly time = new GeradorDeTime();
  private readonly pessoa = new GeradorDePessoa();
  private readonly liga = new GeradorDeLiga();

  geraManchete(): string {
    const manchetesjson = fs.readFileSync(
      resolve('.', 'config', 'manchetes.json'),
      'utf8',
    );

    const manchetes: Manchete = JSON.parse(manchetesjson);
    let manchete = Gerador.geraAleatorio(manchetes);
    const pessoas = manchete.match(/PESSOA/g);

    // se tiver pessoa na manchete gerada substitui a váriavel $PESSOA usada no JSON pela pessoa gerada.
    if (pessoas !== null) {
      for (let i = 0; i < pessoas.length; i++) {
        manchete = manchete.replace('$PESSOA', `${this.pessoa.geraPessoa()}`);
      }
    }

    const ligas = manchete.match(/LIGA/g);
    // se tiver liga na manchete gerada substitui a váriavel $LIGA usada no JSON pela liga gerada.
    if (ligas !== null) {
      for (let i = 0; i < ligas.length; i++) {
        manchete = manchete.replace('$LIGA', `${this.liga.geraLiga()}`);
      }
    }

    const times = manchete.match(/TIME/g);
    // se tiver time na manchete gerada substitui a váriavel $TIME usada no JSON pelo time gerado.
    if (times !== null) {
      for (let i = 0; i < times.length; i++) {
        manchete = manchete.replace('$TIME', `${this.time.geraTime()}`);
      }
    }

    return manchete;
  }
}
