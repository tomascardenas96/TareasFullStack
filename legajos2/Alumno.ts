import { Persona } from "./Persona";
import { Naturales, Sociales } from "./Materias";
import { Curso } from "./Curso";
const { v4: uuidv4 } = require('uuid');
import {read} from "./Functions";

export class Alumno extends Persona {
    private matricula: string;
    private naturales?: Naturales;
    private sociales?: Sociales;
    private curso: Curso | string;

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, modalidad: string, curso: Curso | string) {
        super(nombre, apellido, dni, fechaNacimiento);
        this.matricula = uuidv4().slice(0,5);
        if((modalidad).toLowerCase() === "naturales") {
            this.naturales = read("./Naturales.json");
        } else if((modalidad).toLowerCase() === "sociales") {
            this.sociales = read("./Sociales.json");
        }
        this.curso = curso;
    }
}
