export default class Cuenta {
    private saldoEnCuenta: number;
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.saldoEnCuenta = 0;
        this.nombre = nombre;
        this.apellido = apellido;
}
}