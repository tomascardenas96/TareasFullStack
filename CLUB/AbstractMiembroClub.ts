import { Persona } from "./PersonaInterface";

export abstract class MiembroClub implements Persona {
    readonly nombre: string;
    readonly apellido: string;
    readonly fechaNacimiento: string;
    readonly documento: number;
    readonly telefono: number;
    private miembroDesde: string;

    constructor(nombre: string, apellido: string, nacimiento: string, documento: number, telefono: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = new Date(nacimiento).toLocaleDateString();
        this.documento = documento;
        this.telefono = telefono;
        this.miembroDesde = new Date().toLocaleDateString();
    }
}