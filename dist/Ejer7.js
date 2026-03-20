"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Transporte {
    constructor(distancia) {
        this.distancia = distancia;
    }
    mostrar() {
        console.log(`Costo del viaje: $${this.calcularCosto()}`);
    }
}
class Taxi extends Transporte {
    calcularCosto() {
        return this.distancia * 1.5;
    }
}
class Autobus extends Transporte {
    calcularCosto() {
        return this.distancia * 0.5;
    }
}
class Uber extends Transporte {
    calcularCosto() {
        return this.distancia * 2;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese distancia (km): ", d => {
    console.log("1. Taxi  2. Autobus  3. Uber");
    rl.question("Seleccione transporte: ", op => {
        let t;
        if (op === "1")
            t = new Taxi(+d);
        else if (op === "2")
            t = new Autobus(+d);
        else
            t = new Uber(+d);
        t.mostrar();
        rl.close();
    });
});
//# sourceMappingURL=Ejer7.js.map