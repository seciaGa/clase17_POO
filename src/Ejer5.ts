import * as readline from 'readline';
abstract class Pago {
    constructor(public monto: number) {}
    abstract procesarPago(): void;
}

class Efectivo extends Pago {
    procesarPago() {
        console.log(`Pago en efectivo realizado por $${this.monto}`);
    }
}

class Tarjeta extends Pago {
    procesarPago() {
        console.log(`Pago con tarjeta aprobado por $${this.monto}`);
    }
}

class Transferencia extends Pago {
    procesarPago() {
        console.log(`Transferencia bancaria realizada por $${this.monto}`);
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el monto: ", m => {

    console.log("1. Efectivo  2. Tarjeta  3. Transferencia");

    rl.question("Seleccione metodo de pago: ", op => {

        let pago: Pago;

        if (op == "1") pago = new Efectivo(+m);
        else if (op == "2") pago = new Tarjeta(+m);
        else pago = new Transferencia(+m);

        pago.procesarPago();

        rl.close();
    });

});