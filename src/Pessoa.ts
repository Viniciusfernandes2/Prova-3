
export default class Pessoa {
    constructor(public nome: string, public idade: number, public altura: number, public email: string) {}

    validaEmail(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
}
