// Interface

interface Humano {
  nome: string;
  idade?: number; // Opcional
  [prop: string]: any; // Pode ter qualquer propriedade
  saudar(sobrenome: string): void; // Função obrigatória
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: { nome: string }) {
  pessoa.nome = 'Joana';
}

const pessoa = {
  nome: 'João',
  idade: 27,

  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);

// Usando classes

class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date();

  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface Função

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Math.pow(base, exp);
};

console.log(potencia(3, 10));

// Herança

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

// Usando Interface com Classes

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x1 = 2;

x1.log();
