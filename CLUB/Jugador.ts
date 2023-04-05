import { MiembroClub } from "./AbstractMiembroClub";

export enum Deportes {
    futbol, basket, zumba, voley, natacion, gym
}

export class Jugador extends MiembroClub {
    private deporte: Deportes;

    constructor(nombre: string, apellido: string, nacimiento: string, documento: number, telefono: number, deporte: Deportes) {
        super(nombre, apellido, nacimiento, documento, telefono)
        this.deporte = deporte;
    }
}
