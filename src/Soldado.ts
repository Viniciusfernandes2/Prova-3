
import Pessoa from  './Pessoa';

export default class Soldado extends Pessoa {
    constructor(nome: string, idade: number, altura: number, email: string, public cim: number, public saldo: number) {
        super(nome, idade, altura, email);
        console.log(this.validaEmail() ? "E-mail Válido!" : " E-mail Inválido!");
        console.log(this.requisitos() ? "Está apto" : "Não está apto");
    }

    validaEmail(): boolean {
        const regexMilitar = /^[^\s@]+@(eb|marinha|fab)\.mil\.br$/;
        return regexMilitar.test(this.email);
    }

    requisitos(): boolean {
        return this.altura >= 1.60 && this.idade >= 18 && this.idade <= 32;
    }
}
