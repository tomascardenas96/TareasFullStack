const { v4: uuidv4 } = require('uuid');

export class Curso {
    private nombre: string;
    private idCurso: string;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.idCurso = uuidv4().slice(0, 3);
    }
}