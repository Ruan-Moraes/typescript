
function echo(objeto: any) {
  return objeto;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));

// Usando Generics

function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado('João').length);
// console.log(echoMelhorado(27).length); // Error
console.log(echoMelhorado<number>(27)); // Especificando o tipo
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7]; // ou const avaliacoes: number[] = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // Error
console.log(avaliacoes);

// Array

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
imprimir<{ nome: string; idade: number }>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Ciclano', idade: 23 },
]);

type Aluno = { nome: string; idade: number };

imprimir<Aluno>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Ciclano', idade: 23 },
]);

// Tipo Função

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;

console.log(chamarEcho<string>('Alguma coisa'));
console.log(chamarEcho<number>(27));
console.log(chamarEcho({ nome: 'João', idade: 27 }));

// Class com Generics

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom', 'Dia').executar()); // Error
// console.log(new OperacaoBinaria(3, 7).executar()); // Error

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
// console.log(new SomaBinaria({}, {}.executar())); // Error

class DiferencaDatas extends OperacaoBinaria<Date, string> {
  getTime(data: Date): number {
    let { getTime } = data;

    return getTime.bind(data)();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);

    const diferenca = Math.abs(t1 - t2);

    const dia = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Date(2020, 1, 1);
const d2 = new Date(2020, 6, 1);

console.log(new DiferencaDatas(d1, d2).executar());

// Desafio Classe Fila

class Fila<T extends number /* | string - Aceita tanto number e string */> {
  private _fila: T[] = [];

  entrar(item: T) {
    this._fila.push(item);
  }

  proximo(): T {
    const removedItem = this._fila[0];

    this._fila.splice(0, 1);

    return removedItem;
  }

  imprimir<T>(): void {
    console.log('[ ' + this._fila + ' ]');
  }
}

const fila = new Fila();
// fila.entrar('Batata'); // Error: Só aceita números pois o tipo genérico foi definido como number
fila.entrar(47);
// fila.entrar('Arroz'); // Error
// fila.entrar({}); // Error

fila.proximo();
fila.proximo();

fila.imprimir();

// Desafio Mapa

// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type mapaProps<T, U> = {
  chave: T;
  valor: U;
};

class Mapa<T, U> {
  private _itens: Array<mapaProps<T, U>> = [];

  constructor(...args: Array<mapaProps<T, U>>) {
    this._itens.push(...args);
  }

  colocar(item: mapaProps<T, U>): void {
    for (let i = 0; i < this._itens.length; i++) {
      if (item.chave === this._itens[i].chave) {
        this._itens[i].valor = item.valor;

        return;
      }
    }

    this._itens.push(item);
  }

  obter(index: number): mapaProps<T, U> | null {
    if (index >= this._itens.length || index < 0) {
      return null;
    }

    return this._itens[index];
  }

  imprimir(): void {
    console.log(this._itens);
  }

  limpar(): void {
    this._itens = [];
  }

  get itens(): Array<mapaProps<T, U>> {
    return this._itens;
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });

console.log(mapa.obter(0));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();

const teste = () => {
  return;
};
