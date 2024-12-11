"use strict";
// Classes
class Data {
    // Todos os atributos são públicos por padrão
    dia; // ou dia: number = 1
    mes; // ou mes: number = 1
    ano; // ou ano: number = 1970
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(1, 1, 2020);
console.log(data.dia);
const data2 = new Data(1, 1);
console.log(data2);
class DataEsperta {
    dia;
    mes;
    ano;
    // Todos os atributos são públicos por padrão
    //   dia: number; // ou dia: number = 1
    //   mes: number; // ou mes: number = 1
    //   ano: number; // ou ano: number = 1970
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const dataesp = new DataEsperta(1, 1, 2020);
console.log(data.dia);
const dataesp2 = new DataEsperta(1, 1);
console.log(data2);
// Desafio Produto
class Produto {
    nome;
    preco;
    desconto;
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.valorComDesconto()} (${this.desconto * 100}% off)`;
    }
    // Desafio
    valorComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const prod1 = new Produto('Caneta', 1.99);
prod1.desconto = 0.06;
prod1.preco = 2.99;
console.log(prod1.resumo());
const prod2 = new Produto('Lápis', 0.99, 0.1);
console.log(prod2.resumo());
// Modificadores de acesso
class Carro {
    marca;
    modelo;
    velocidadeMaxima;
    velocidadeAtual = 0;
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro = new Carro('Chevrolet', 'Prisma', 250);
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.frear());
console.log(carro.frear());
// Herança
class Camaro extends Carro {
    turbo = false;
    constructor() {
        super('Chevrolet', 'Camaro', 500);
    }
    ligarTurbo() {
        this.turbo = true;
    }
}
const camaro = new Camaro();
camaro.acelerar();
camaro.acelerar();
camaro.acelerar();
camaro.ligarTurbo();
console.log(camaro.acelerar());
console.log(camaro.acelerar());
console.log(camaro.acelerar());
console.log(camaro.frear());
console.log(camaro.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    _idade = 0; // _ é uma convenção para atributos privados
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static PI = 3.1416;
    static areaCirc(raio) {
        return this.PI * raio ** 2;
    }
}
console.log(Matematica.areaCirc(4));
console.log(Matematica.PI);
// Classe abstrata
class Calculo {
    resultado = 0;
    getResultado() {
        return this.resultado;
    }
}
// new Calculo(); // Não é possível instanciar uma classe abstrata
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let somaClass = new Soma();
somaClass.executar(2, 3, 4, 5);
console.log(somaClass.getResultado());
let multClass = new Multiplicacao();
multClass.executar(2, 3, 4, 5);
console.log(multClass.getResultado());
// Construtor privado e Singleton
class Unico {
    static instance = new Unico();
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
// const errado = new Unico();
console.log(Unico.getInstance().agora());
console.log(Unico.getInstance().agora());
console.log(Unico.getInstance().agora());
// Somente leitura
class Aviao {
    prefixo;
    modelo;
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
console.log(turboHelice);
//# sourceMappingURL=classes.js.map