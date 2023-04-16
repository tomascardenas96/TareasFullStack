import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Materias } from "./Materias";
import { Profesor } from "./Profesor";

export class Escuela {
    private alumnos: Alumno[];
    private profesores: Profesor[];
    private materias: Materias[];
    private cursos: Curso[];

    constructor() {
        this.alumnos = [];
        this.profesores = [];
        this.materias = [];
        this.cursos = [];
    }
    
    addCourse(nombre: string) {
        let newCourse = new Curso(nombre);
        this.cursos.push(newCourse);
    }

    addStudent(nombre: string, apellido: string, dni: number, edad: number, curso: Curso) {
        let newStudent = new Alumno(nombre, apellido, dni, edad, curso);
    }

    addTeacher(nombre: string, apellido:string, dni: number, edad: number) {
        let newTeacher = new Profesor(nombre, apellido, dni, edad);
    }

    addSubjects(nombre: string) {
        let newSubjects = new Materias(nombre, 0);
    }
    
}