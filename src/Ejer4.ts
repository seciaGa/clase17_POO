import * as readline from 'readline';

abstract class Empleado {
    constructor(public nombre: string) {}
    abstract calcularSalario(): number;

    mostrar() {
        console.log(`${this.nombre} - Salario: $${this.calcularSalario()}`);
    }
}

class PorHoras extends Empleado {
    constructor(nombre: string, public horas: number, public pago: number) {
        super(nombre);
    }
    calcularSalario() {
        return this.horas * this.pago;
    }
}

class Fijo extends Empleado {
    constructor(nombre: string, public salario: number) {
        super(nombre);
    }
    calcularSalario() {
        return this.salario;
    }
}

class Comision extends Empleado {
    constructor(nombre: string, public ventas: number, public porcentaje: number) {
        super(nombre);
    }
    calcularSalario() {
        return this.ventas * this.porcentaje;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nombre: ", nombre => {

    console.log("1.Horas  2.Fijo  3.Comision");

    rl.question("Opcion: ", op => {

        if (op == "1") {
            rl.question("Horas: ", h => {
                rl.question("Pago: ", p => {
                    new PorHoras(nombre, +h, +p).mostrar();
                    rl.close();
                });
            });
        }

        else if (op == "2") {
            rl.question("Salario: ", s => {
                new Fijo(nombre, +s).mostrar();
                rl.close();
            });
        }

        else {
            rl.question("Ventas: ", v => {
                rl.question("Comision (ejemplito 0.1): ", c => {
                    new Comision(nombre, +v, +c).mostrar();
                    rl.close();
                });
            });
        }

    });

});