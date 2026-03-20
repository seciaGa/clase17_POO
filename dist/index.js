"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(this.nombre + " Está comiendo ");
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log("Guauu");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("Miauuu");
    }
}
const perro = new Perro("Firulaiss");
perro.comer();
perro.hacerSonido();
//# sourceMappingURL=index.js.map