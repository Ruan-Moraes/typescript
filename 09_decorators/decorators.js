"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
// decorator factory - utilizado para passar parâmetros para o decorator
function decorator(obj) {
    // decorator
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// @logarClasse
// @logarClasseSe(false)
// @decorator({ a: 'Teste', b: 123 })
// @logarObjeto
let Eletrodomestico = (() => {
    let _classDecorators = [imprimivel];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Eletrodomestico = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Eletrodomestico = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        constructor() {
            console.log('novo...');
        }
    };
    return Eletrodomestico = _classThis;
})();
function imprimivel(construtor) {
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
let MudancaAdministrativa = (() => {
    let _classDecorators = [perfilAdmin];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MudancaAdministrativa = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MudancaAdministrativa = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        critico() {
            console.log('Algo crítico foi alterado!');
        }
    };
    return MudancaAdministrativa = _classThis;
})();
new MudancaAdministrativa().critico();
function perfilAdmin(mudancaAdministrativa) {
    return class extends mudancaAdministrativa {
        constructor(...args) {
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
//# sourceMappingURL=decorators.js.map