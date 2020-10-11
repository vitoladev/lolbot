type Dado = { [key: string]: string };

export class Gerador {
  // Gera um número aleatório entre 0 e a quantidade de pessoas/ligas/times/manchetes
  static aleatorio(max: number): number {
    const min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // retorna o(a) pessoa/time/liga/manchete aleatória
  static geraAleatorio(dados: Dado): string {
    const quantidade = Object.keys(dados).length - 1;
    const dado = dados[Gerador.aleatorio(quantidade)];
    return dado;
  }
}
