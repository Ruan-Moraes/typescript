"use strict";
// Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome;
//   this.velocidade = 0;
//   this.buzinar = function () {
//     console.log('Toooooooooot!');
//   };
//   this.acelerar = function (delta) {
//     this.velocidade = this.velocidade + delta;
//   };
// }
// var moto = new Moto('Ducati');
// moto.buzinar();
// console.log(moto.velocidade);
// moto.acelerar(30);
// console.log(moto.velocidade);
// Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0,
// };
// var retangulo = Object.create(objeto2D);
// retangulo.base = 5;
// retangulo.altura = 7;
// retangulo.area = function () {
//   return this.base * this.altura;
// };
// console.log(retangulo.area());
// Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: '',
// };
// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//     return this._primeiroNome;
//   },
//   set: function (valor) {
//     if (valor.length >= 3) {
//       this._primeiroNome = valor;
//     } else {
//       this._primeiroNome = '';
//     }
//   },
//   enumerable: true,
//   configurable: true,
// });
// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = 'Le';
// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = 'Leonardo';
// console.log(estagiario.primeiroNome);
// Desafio 1
class Moto {
    nome;
    velocidade;
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.nome = nome;
    }
    buzinar = () => {
        console.log('Tooooooooooot!');
    };
    acelerar = (delta) => {
        this.velocidade = this.velocidade + delta;
    };
}
const moto = new Moto('Moto 1');
moto.buzinar();
moto.acelerar(25);
// Desafio 2
class Object2D {
    base;
    altura;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
    area = () => {
        return this.base * this.altura;
    };
}
class Retangulo extends Object2D {
    //   constructor(a: number, b: number) {
    //     super(a, b);
    //   } // Não é necessário
    toString = () => {
        return `A aŕea do retangulo é ${this.area()}.`;
    };
}
const retangulo = new Retangulo(10, 47);
console.log(retangulo.toString());
// Desafio 3
class Estagiario {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length >= 3) {
            this._name = newName;
        }
        else {
            this._name = '';
        }
    }
}
const estagiario = new Estagiario('Alan');
console.log(estagiario._name);
console.log(estagiario.name);
//# sourceMappingURL=desafio.js.map