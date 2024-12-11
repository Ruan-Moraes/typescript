function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function): void {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

// decorator factory - utilizado para passar parâmetros para o decorator
function decorator(obj: { a: string; b: number }) {
  // decorator
  return function (_: Function): void {
    console.log(obj.a + ' ' + obj.b);
  };
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  console.log('Carregado...');

  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...');
      super(...args);
      console.log('Depois...');
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
  imprimir(): void;
}

// @logarClasse
// @logarClasseSe(false)
// @decorator({ a: 'Teste', b: 123 })
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin

const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false,
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!');
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(mudancaAdministrativa: T) {
  return class extends mudancaAdministrativa {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Error ');
      }
    }
  };
}

// Decorator de método

// class ContaCorrente {
//   private saldo: number = 0;

//   @congelar
//   sacar(@paramInfo valor: number) {
//     if (valor <= this.saldo) {
//       this.saldo -= valor;
//       return true;
//     }

//     return false;
//   }

//   @congelar
//   getSaldo() {
//     return this.saldo;
//   }
// }

// const cc = new ContaCorrente();
// cc.sacar(100);
// cc.sacar(500);
// console.log(cc.getSaldo());

// // cc.getSaldo = function () {
// //   return this['saldo'] + 700;
// // };

// console.log(cc.getSaldo());

// // Object.freeze()

// function congelar(
//   target: any,
//   propertyKey: string,
//   descriptor?: PropertyDescriptor
// ) {
//   if (descriptor) {
//     descriptor.writable = false;
//   }
// }

// function paramInfo(target: any, propertyKey: string, index: number) {
//   console.log('Parâmetro', propertyKey, index);
// }

// Decorator de atributo

// class ContaCorrente {
//   @naoNegativo
//   private saldo: number;

//   constructor(saldo: number) {
//     this.saldo = saldo;
//   }

//   @congelar
//   sacar(valor: number) {
//     if (valor <= this.saldo) {
//       this.saldo -= valor;
//       return true;
//     }

//     return false;
//   }

//   @congelar
//   getSaldo() {
//     return this.saldo;
//   }
// }

// function naoNegativo(target: any, propertyKey: string) {
//   delete target[propertyKey];

//   Object.defineProperty(target, propertyKey, {
//     get: function (): any {
//       return target['_' + propertyKey];
//     },
//     set: function (valor: any): void {
//       if (valor < 0) {
//         throw new Error('Saldo inválido');
//       } else {
//         target['_' + propertyKey] = valor;
//       }
//     },
//   });
// }

// const cc = new ContaCorrente(100);
// cc.sacar(50);
// cc.sacar(100);

// console.log(cc.getSaldo());
