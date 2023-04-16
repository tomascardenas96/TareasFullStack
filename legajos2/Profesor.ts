import { Persona } from "./AbstractPersona";
const { v4: uuidv4 } = require('uuid');

export class Profesor extends Persona {
    private contrato: string;

    constructor(nombre: string, apellido: string, dni: number, edad: number) {
        super(nombre, apellido, dni, edad);
        this.contrato = uuidv4().slice(0, 5);
    }
}