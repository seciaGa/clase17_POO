"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class carro extends Vehiculo {
    mover() {
        console.log("El carro avanza a 40km/h");
    }
}
class Moto extends Vehiculo {
    mover() {
        console.log("La moto es desplazable a 20km/h");
    }
}
const carrito = new carro("Toyotaa");
carrito.mover();
//# sourceMappingURL=Ejer2.js.map