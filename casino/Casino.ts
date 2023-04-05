export default class Casino {
    private insertarEfectivo: number;
    private isMusicaPrendida: boolean;

    constructor(efectivo: number, musica: boolean) {
        this.insertarEfectivo = efectivo;
        this.isMusicaPrendida = musica;
    }

    ingresoEfect(efectivo: number) {
        console.log(`Usted ingreso $${efectivo}`);
        this.insertarEfectivo += efectivo;
    }

    prenderApagarMusica() {
        this.isMusicaPrendida = !this.isMusicaPrendida;
        this.isMusicaPrendida === true ? console.log(`Has prendido la musica`): console.log(`Has apagado la musica`);
    }
}