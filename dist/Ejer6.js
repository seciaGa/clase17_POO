"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Notificacion {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
}
class Email extends Notificacion {
    enviar() {
        console.log(`Enviando Email: ${this.mensaje}`);
    }
}
class SMS extends Notificacion {
    enviar() {
        console.log(`Enviando SMS: ${this.mensaje}`);
    }
}
class WhatsApp extends Notificacion {
    enviar() {
        console.log(`Enviando WhatsApp: ${this.mensaje}`);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escriba el mensaje: ", msg => {
    console.log("1. Email  2. SMS  3. WhatsApp");
    rl.question("Seleccione tipo de envío: ", op => {
        let noti;
        if (op === "1")
            noti = new Email(msg);
        else if (op === "2")
            noti = new SMS(msg);
        else
            noti = new WhatsApp(msg);
        noti.enviar();
        rl.close();
    });
});
//# sourceMappingURL=Ejer6.js.map