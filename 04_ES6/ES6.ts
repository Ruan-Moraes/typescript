// let & const

console.log('LET & CONST');
let seraQuePode = '?'; // hoisting | var & let não sofrem hoisting

const estaFrio = true;

if (estaFrio) {
  var acao = 'Colocar o casaco!';
  let b = 'Brrr!';

  console.log(acao);
  console.log(b);
}

// console.log(acao); // var não respeita escopo de bloco // 'acao' está definido
// console.log(b); // let respeita escopo de bloco // Erro: 'b' não está definido

const cpf: string = '123.456.789-00';
// cpf = '987.654.321-99'; // const não permite reatribuição

/* -------------------------------------------------------------------------- */

// Escopo

var segredo = 'externo!';

function revelar() {
  var segredo = 'interno';

  console.log(segredo); // 'interno'
}

console.log(segredo); // 'externo!'

{
  {
    const def = 'def';
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// console.log(i); // i não está definido

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('i =', i);

/* -------------------------------------------------------------------------- */

// Arrow Function

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log('Olá!');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá', pessoa);
falarCom('João');

// this

function normalComThis() {
  // this sem strict mode aponta para o objeto global (window)
  // this em função que está contida em objeto aponta para o objeto que contém a função
  // console.log(this); // this === undefined - em modo estrito (strict mode)
}

// normalComThis(); // this === undefined

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' }); // bind() permite definir o valor de this
console.log(normalComThisEspecial()); // this === { nome: 'Ana' }

// this ? Arrow Function

console.log(this); // this === {}
// const arrowComThis = () => console.log(this); // this aponta para o contexto léxico (local onde a função foi escrita)
// arrowComThis(); // this === {}

/* -------------------------------------------------------------------------- */

// Parâmetros padrão

function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  console.log(inicio);

  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }

  console.log('Fim!');
}

contagemRegressiva();
contagemRegressiva(5);

/* -------------------------------------------------------------------------- */

// Rest & Spread

const numbers = [1, 10, 99, -5];

console.log(Math.max(...numbers)); // Spread

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', ...turmaA, 'Miguel']; // Spread - Espalha os elementos de um array

console.log(turmaB);

function retornarArray(a: number, ...args: number[]): number[] {
  // Rest - Junta os parâmetros em um array
  console.log(a);

  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla); // Spread

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla); // Spread

/* -------------------------------------------------------------------------- */

// Destructuring (array)

const caracteristicas = ['Motor Zet 1.8', 2020];

// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas; // Destructuring (array)

console.log(motor);
console.log(ano);

// Destructuring (objeto)

const item = {
  nome: 'SSD 480GB',
  preco: 200,
};

const { nome: n, preco: p } = item; // Destructuring (objeto)

console.log(n);
console.log(p);

/* -------------------------------------------------------------------------- */

// Template String

const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '9';

const boasVindas = `Boas vindas ${usuarioID}, Notificações: ${
  parseInt(notificacoes) > 9 ? '+9' : notificacoes
}`;

console.log(boasVindas);

console.log(`${(1 + 1) * 30}`);

console.log(`Motor: ${caracteristicas[0]}`);
console.log(`Ano: ${caracteristicas[1]}`);

/* -------------------------------------------------------------------------- */

// Exercício 1

// var dobro = function (valor) {
//   return valor * 2;
// };
// console.log(dobro(10));

const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// Exercício 2

// var dizerOla = function (nome) {
//   if (nome === undefined) {
//     nome = 'Pessoa';
//   }
//   console.log('Ola, ' + nome);
// };
// dizerOla();
// dizerOla('Anna');

const dizerOla = (nome: string): void => {
  console.log(`Olá ${nome}!`);
};

// Exercício 3

// var nums = [-3, 33, 38, 5];
// console.log('???');

const nums = [-3, 33, 38, 5];
console.log(...nums);

// Exercício 4

// var nums2 = [-3, 33, 38, 5]
// var array = [55, 20]
// console.log(array)

const nums2 = [-3, 33, 38, 5];
const array = [55, 20, ...nums2];
console.log(array);

// Exercício 4

// var notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];
// console.log(nota1, nota2, nota3);

const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(`${nota1} | ${nota2} | ${nota3}`);

// var cientista = { primeiroNome: 'Will', experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
// console.log(primeiroNome, experiencia);

const cientista = {
  primeiroNome: 'Will',
  experiencia: 12,
};
const { primeiroNome, experiencia } = cientista;
console.log(
  `O nome do cientista é ${primeiroNome} e ele tem ${experiencia} anos de experiência`
);

/* -------------------------------------------------------------------------- */

// Callback

function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois...');
  }, 3000);
}

esperar3s(function (resultado: string) {
  console.log(resultado);
});

// Promise

function esperar3sPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3s depois promise...');
    }, 3000);
  });
}

esperar3sPromise().then((dado) => console.log(dado));

fetch('https://swapi.dev/api/people/1')
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[0]))
  .then((resFilm) => resFilm.json())
  .then((filme) => console.log(filme.title))
  .catch((err) => console.log('Catch!!!', err));
