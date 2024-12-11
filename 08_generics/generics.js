"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
// console.log(echoMelhorado(27).length); // Error
console.log(echoMelhorado(27)); // Especificando o tipo
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7]; // ou const avaliacoes: number[] = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // Error
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
console.log(chamarEcho(27));
console.log(chamarEcho({ nome: 'João', idade: 27 }));
// Class com Generics
class OperacaoBinaria {
    operando1;
    operando2;
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'Dia').executar()); // Error
// console.log(new OperacaoBinaria(3, 7).executar()); // Error
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
// console.log(new SomaBinaria({}, {}.executar())); // Error
class DiferencaDatas extends OperacaoBinaria {
    getTime(data) {
        let { getTime } = data;
        return getTime.bind(data)();
    }
    executar() {
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
class Fila {
    _fila = [];
    entrar(item) {
        this._fila.push(item);
    }
    proximo() {
        const removedItem = this._fila[0];
        this._fila.splice(0, 1);
        return removedItem;
    }
    imprimir() {
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
class Mapa {
    _itens = [];
    constructor(...args) {
        this._itens.push(...args);
    }
    colocar(item) {
        for (let i = 0; i < this._itens.length; i++) {
            if (item.chave === this._itens[i].chave) {
                this._itens[i].valor = item.valor;
                return;
            }
        }
        this._itens.push(item);
    }
    obter(index) {
        if (index >= this._itens.length || index < 0) {
            return null;
        }
        return this._itens[index];
    }
    imprimir() {
        console.log(this._itens);
    }
    limpar() {
        this._itens = [];
    }
    get itens() {
        return this._itens;
    }
}
const mapa = new Mapa();
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
//# sourceMappingURL=generics.js.map