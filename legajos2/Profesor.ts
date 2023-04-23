import { Persona } from "./Persona";
const { v4: uuidv4 } = require('uuid');

export class Profesor extends Persona {
    private contrato: string;
    private email: string;
    private celular: number;
    private fechaIngreso: string;

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, email: string, celular: number) {
        super(nombre, apellido, dni, fechaNacimiento);
        this.contrato = uuidv4().slice(0, 5);
        this.email = email;
        this.celular = celular;
        this.fechaIngreso = (new Date(Date.now()).toLocaleDateString());
    }
}


