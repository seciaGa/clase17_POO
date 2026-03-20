abstract class Animal{
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    comer() {
        console.log(this.nombre + " Está comiendo ");
    }

    abstract hacerSonido(): void;

}

class Perro extends Animal{
    hacerSonido(): void {
        console.log("Guauu")
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log("Miauuu")
    }
}

const perro = new Perro("Firulaiss")
perro.comer();
perro.hacerSonido();