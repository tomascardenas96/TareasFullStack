export abstract class Persona {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private edad: number;

    constructor(nombre: string, apellido: string, dni: number, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
    }
}