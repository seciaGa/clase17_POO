"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrar() {
        console.log(`${this.nombre} - Salario: $${this.calcularSalario()}`);
    }
}
class PorHoras extends Empleado {
    constructor(nombre, horas, pago) {
        super(nombre);
        this.horas = horas;
        this.pago = pago;
    }
    calcularSalario() {
        return this.horas * this.pago;
    }
}
class Fijo extends Empleado {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
class Comision extends Empleado {
    constructor(nombre, ventas, porcentaje) {
        super(nombre);
        this.ventas = ventas;
        this.porcentaje = porcentaje;
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
//# sourceMappingURL=Ejer4.js.map