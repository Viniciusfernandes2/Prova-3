
import Pessoa from './Pessoa';

export default class Oficial extends Pessoa {
    constructor(nome: string, idade: number, altura: number, email: string, public cim: number, public saldo: number, public patente: number) {
        super(nome, idade, altura, email);
        console.log(this.validaEmail() ? "E-mail Válido!" : "E-mail Inválido!");
    }

    validaEmail(): boolean {
        const regexMilitar = /^[^\s@]+@(eb|marinha|fab)\.mil\.br$/;
        return regexMilitar.test(this.email);
    }

    getPatente(): string {
        const patentes: { [key: number]: string } = {
            10: 'marechal',
            9: 'general',
            8: 'coronel',
            7: 'tenente-coronel',
            6: 'major',
            5: 'capitão',
            4: 'tenente',
            3: 'sargento',
            2: 'cabo',
            1: 'soldado'
        };
        return patentes[this.patente] || 'Patente não encontrada.';
    }
}
