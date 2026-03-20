abstract class Vehiculo{
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    abstract mover(): void

}
class carro extends Vehiculo{
    mover():void{
        console.log("El carro avanza a 40km/h")
    }
}

class Moto extends Vehiculo{
    mover(): void {
        console.log("La moto es desplazable a 20km/h")
    }
}

const carrito = new carro("Toyotaa")
carrito.mover();
