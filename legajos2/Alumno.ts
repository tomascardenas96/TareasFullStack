import { Persona } from "./AbstractPersona";
import { Materias } from "./Materias";
import { Curso } from "./Curso";
const { v4: uuidv4 } = require('uuid');

export class Alumno extends Persona {
    private matricula: string;
    private materias: Materias[];
    private curso: Curso;

    constructor(nombre: string, apellido: string, dni: number, edad: number, curso: Curso) {
        super(nombre, apellido, dni, edad);
        this.matricula = uuidv4().slice(0,5);
        this.materias = [];
        this.curso = curso;
    }
}