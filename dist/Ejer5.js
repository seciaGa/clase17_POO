"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Pago {
    constructor(monto) {
        this.monto = monto;
    }
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
        let pago;
        if (op == "1")
            pago = new Efectivo(+m);
        else if (op == "2")
            pago = new Tarjeta(+m);
        else
            pago = new Transferencia(+m);
        pago.procesarPago();
        rl.close();
    });
});
//# sourceMappingURL=Ejer5.js.map