
export class Persona {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private fechaNacimiento: string;

    constructor(nombre: string, apellido: string, dni: number, fechaNac: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNac
    }
}