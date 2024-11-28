/*
  Tipos de dados em TypeScript:
*/

/* Tipos de dados primitivo */ {
  // Boolean
  let isDone: boolean = false;

  // Number
  let decimal: number = 6;

  // String
  let color: string = 'blue';

  // Null and Undefined - Não faz muito sentido, mas é possível
  let u: undefined = undefined;
  let n: null = null;
}

/* -------------------------------------------------------------------------- */

// any - Qualquer tipo
let notSure: any = 4;
notSure = 'Qualquer coisa';
notSure = false;

/* Compilador consegue inferir o tipo de forma implícita */ {
  let myName = 'Alice';
  let myAge = 30;
  let hasPet = false;

  // myName = 10; // Error
  // myAge = 'Alice'; // Error
  // hasPet = 'Alice'; // Error

  // Solução: Definir o tipo de dado
  let myName2: string = 'Alice';
  let myAge2: number = 30;
  let hasPet2: boolean = false;

  // myName2 = 10; // Error
  // myAge2 = 'Alice'; // Error
  // hasPet = 'Alice'; // Error

  // Outra abordagem

  let myName3; // any
  let myAge3; // any
  let hasPet3; // any

  myName3 = 'Alice';
  myAge3 = 30;
  hasPet3 = false;

  myName3 = 10; // OK
  myAge3 = 'Alice'; // OK
  hasPet3 = 'Alice'; // OK
}

/* -------------------------------------------------------------------------- */

// Array - Forma 1
let list: number[] = [1, 2, 3];

// Array (Generic) - Forma 2
let list2: Array<number> = [1, 2, 3];

// Array (Any)
let list3: any[] = [1, true, 'free'];

// Tuple - Array com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
// z = ['hello', 10, 20]; // Error - Atribuição de mais elementos do que o esperado -> [string, number, number]

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c); // 1

// Enum (Valores personalizados)
enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
  Puple = 100,
  Yellow,
}
let c2: Color2 = Color2.Green;
console.log(c2); // 2
let c3: Color2 = Color2.Puple;
console.log(c3); // 100
let c4: Color2 = Color2.Yellow;
console.log(c4); // 101

/* -------------------------------------------------------------------------- */

// Void
function warnUser(): void {
  console.log('This is my warning message');

  // return 'Teste'; // Error
  return undefined; // OK
} // Declaração de função sem retorno

// Função em variável
let warnUser2: () => void = function () {
  console.log('This is my warning message');
};

warnUser2 = warnUser;
// warnUser2 = 'Teste'; // Error
warnUser2();

let warnUser3: (number1: number, number2: number) => number = function (
  number1: number,
  number2: number
): number {
  return number1 + number2;
};

console.log(warnUser3(10, 20));

// Never
function error(message: string): never {
  throw new Error(message);
} // Função que nunca retorna um valor (Ou por lançar uma exceção ou por entrar em um loop infinito)

/* -------------------------------------------------------------------------- */

// Object
let obj: { key: String } = {
  key: 'value',
};

obj = {
  key: 'batata',
  // key2: 'value', // Error
};

let user: { name: string; age: number; address: String[] } = {
  name: 'Alice',
  age: 30,
  address: ['Rua 1', 'Rua 2'],
};

/* --- DESAFIO -------------------------------------------------------------- */

const funcionario: {
  supervisores: String[];
  baterPonto: (hora: number) => String;
} = {
  supervisores: ['Alice', 'Bob'],
  baterPonto(hora: number): String {
    if (hora <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário';
    }
  },
};

console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
console.log(funcionario.supervisores);

/* -------------------------------------------------------------------------- */

// Alias

type Funcionario = {
  supervisores: String[];
  baterPonto: (hora: number) => String;
};

const funcionario2: Funcionario = {
  supervisores: ['Alice', 'Bob'],
  baterPonto(hora: number): String {
    if (hora <= 8) {
      return 'Ponto normal';
    } else {
      return 'Fora do horário';
    }
  },
};

console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));
console.log(funcionario2.supervisores);

/* -------------------------------------------------------------------------- */

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);

let nome: String | null = null;
console.log(nome);
nome = 'Alice';
console.log(nome);

/* -------------------------------------------------------------------------- */

// Checando tipos
let valor = 30;
// valor = '30'; // Error

if (typeof valor === 'number') {
  console.log('É um número!');
}

/* -------------------------------------------------------------------------- */
// Flag - strictNullChecks

let altura = 12;
// altura = null; // Error

let altura2: number | null = 12;
altura2 = null; // OK

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato: Contato = {
  nome: 'Alice',
  tel1: '123',
  tel2: null,
};

let nullID: null = null; // OK
// nullID = 10; // Error

/* --- DESAFIO -------------------------------------------------------------- */
type contaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: contaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
    this.saldo += valor;
  },
};

type correntista = {
  nome: string;
  contaBancaria: contaBancaria;
  contatos: string[];
};

let correntista: correntista = {
  nome: 'Alice',
  contaBancaria: contaBancaria,
  contatos: ['123', '456'],
};
