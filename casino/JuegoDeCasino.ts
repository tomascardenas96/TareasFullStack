import Cuenta from "./Cuenta";

export default class JuegoDeCasino{
    protected saldoActual: number;

    constructor() {
        this.saldoActual = 0;
    }

    retirarDinero(monto: number, cuenta: Cuenta) {
        if(monto > this.saldoActual) {
            console.log(`Saldo insuficiente`);
        } else {
        cuenta["saldoEnCuenta"] += monto;
        this.saldoActual -= monto;
        console.log(`
        Usted ha retirado $${monto}
        Cuenta con: $${this.saldoActual} actualmente
        `);
        }
    }

    generarVoucher(){
        console.log(`Se ha generado un voucher por ${this.saldoActual}`);
        
    }
}