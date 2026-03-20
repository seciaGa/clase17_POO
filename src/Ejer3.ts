abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Cuadrado extends Figura {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

class Rectangulo extends Figura {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }

    calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
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

