import { Persona } from "./Persona";
const { v4: uuidv4 } = require('uuid');
import * as fs from "fs";

export class Profesor extends Persona {
    private contrato: string;
    private email: string;
    private celular: number;

    constructor(nombre: string, apellido: string, dni: number, edad: number, email: string, celular: number) {
        super(nombre, apellido, dni, edad);
        this.contrato = uuidv4().slice(0, 5);
        this.email = email;
        this.celular = celular;
    }
}


