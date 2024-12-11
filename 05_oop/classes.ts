// Classes

class Data {
  // Todos os atributos são públicos por padrão
  dia: number; // ou dia: number = 1
  mes: number; // ou mes: number = 1
  ano: number; // ou ano: number = 1970

  constructor(dia: number, mes: number, ano: number = 1970) {
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
  // Todos os atributos são públicos por padrão
  //   dia: number; // ou dia: number = 1
  //   mes: number; // ou mes: number = 1
  //   ano: number; // ou ano: number = 1970

  constructor(
    public dia: number,
    public mes: number,
    public ano: number = 1970
  ) {
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
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `${this.nome} custa R$${this.valorComDesconto()} (${
      this.desconto * 100
    }% off)`;
  }

  // Desafio
  public valorComDesconto(): number {
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
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  acelerar(): number {
    return this.alterarVelocidade(5);
  }

  frear(): number {
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
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 500);
  }

  ligarTurbo(): void {
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
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
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
  private _idade: number = 0; // _ é uma convenção para atributos privados

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
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
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio ** 2;
  }
}

console.log(Matematica.areaCirc(4));
console.log(Matematica.PI);

// Classe abstrata

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

// new Calculo(); // Não é possível instanciar uma classe abstrata

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
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
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
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
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
console.log(turboHelice);
