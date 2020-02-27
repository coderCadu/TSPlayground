let nome: string = 'Carlos';
console.log(nome);

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
};

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal';
        } else {
            return 'Fora do horário!';
        }
    }
};

let nota: number | string = 10;

function somar(n1: number, n2: number): number {
    return n1 + n2;
};

const subtrair = (n1: number, n2: number): number => n1 - n2;

const falarCom = (pessoa: string) => console.log('ola ' + pessoa);

// function normalComThis(){
//     console.log(this);
// };

// const normalComThisEspecial = normalComThis.bind(2);

const arrowComThis = () => console.log(this);

interface A {

}

interface B {

}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString());
}

const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome
    }
};

cli.log();

function echo<T>(objeto: T): T {
    return objeto;
}

console.log(echo<number>(12));
