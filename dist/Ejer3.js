"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
const cuadrado = new Cuadrado(5);
console.log('Cuadrado:');
console.log('Area:', cuadrado.calcularArea());
console.log('Perímetro:', cuadrado.calcularPerimetro());
const rectangulo = new Rectangulo(4, 7);
console.log('Rectangulo:');
console.log('Area:', rectangulo.calcularArea());
console.log('Perimetro:', rectangulo.calcularPerimetro());
const circulo = new Circulo(3);
console.log('Circulo:');
console.log('Area:', circulo.calcularArea().toFixed(3));
console.log('Perimetro:', circulo.calcularPerimetro().toFixed(3));
//# sourceMappingURL=Ejer3.js.map