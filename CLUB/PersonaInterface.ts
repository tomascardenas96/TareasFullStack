export interface Persona {
    readonly nombre: string;
    readonly apellido: string;
    readonly fechaNacimiento: string;
    readonly documento: number;
    readonly telefono: number;
}

export abstract class MiembroClub implements Persona {
    readonly nombre: string;
    readonly apellido: string;
    readonly fechaNacimiento: string;
    readonly documento: number;
    readonly telefono: number;
    private miembroDesde: Date;

}