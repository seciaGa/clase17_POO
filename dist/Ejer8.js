"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInformacion() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio final: $${this.calcularPrecioFinal()}`);
    }
}
class Electronico extends Producto {
    calcularPrecioFinal() {
        return this.precio * 1.15;
    }
}
class Ropa extends Producto {
    calcularPrecioFinal() {
        return this.precio * 0.9;
    }
}
class Alimento extends Producto {
    calcularPrecioFinal() {
        return this.precio * 1.05;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Nombre del producto: ", nombre => {
    rl.question("Precio base: ", p => {
        console.log("1. Electrónico  2. Ropa  3. Alimento");
        rl.question("Tipo de producto: ", op => {
            let prod;
            if (op == "1")
                prod = new Electronico(nombre, +p);
            else if (op == "2")
                prod = new Ropa(nombre, +p);
            else
                prod = new Alimento(nombre, +p);
            prod.mostrarInformacion();
            rl.close();
        });
    });
});
//# sourceMappingURL=Ejer8.js.map