import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Naturales, Sociales } from "./Materias";
import { Profesor } from "./Profesor";
import { save, read, check, write } from "./Functions";

export class Escuela {

    private addCourse(nombre: string): Curso {
        let newCourse = new Curso(nombre);
        return newCourse;
    }

    addStudent(nombre: string, apellido: string, dni: number, fechaNac: string, modalidad: string, curso: string) {
        let course = this.addCourse(curso);
        let newStudent = new Alumno(nombre, apellido, dni, fechaNac, modalidad, course);
        save("./Alumnos.json", newStudent);
        console.log(`The student ${nombre} has been added correctly`);
    }

    deleteStudent(nombre: string, apellido: string, matricula: string) {
        try {
            let studentsList = read("./Alumnos.json");
            let deleted: number = studentsList.findIndex((student: any) => (student.nombre === nombre) && (student.apellido === apellido) && (student.matricula === matricula));
            if(deleted >= 0){
                studentsList.splice(deleted, 1);
                write("./Alumnos.json", studentsList);
            } else {
                console.log("Student not found");
            }
        } catch(error) {
            console.log("The file cannot be found: 'deleteStudent() method'");
        }
    }
    
    findStudent(nombre: string, apellido: string, matricula: string): Object {
        let studentsList = read("./Alumnos.json");
        let found = studentsList.filter((student: any) => (student.nombre === nombre) && (student.apellido === apellido) || (student.matricula === matricula));
        console.log(found);
        return found;
    }

    modifyStudent(nombre: string, apellido: string, matricula: string, nombreNuevo: string, apellNuevo: string, docNuevo: number) {
        let studentsList = read("./Alumnos.json");
        let found = studentsList.find((student: any) => (student.nombre === nombre) && (student.apellido === apellido) && (student.matricula === matricula));
        if(found) {
            found.nombre = nombreNuevo;
            found.apellido = apellNuevo;
            found.documento = docNuevo;
            this.deleteStudent(nombre, apellido, matricula);
            save("./Alumnos.json", found);
        }
    }
    
    addQualification(nombre: string, apellido: string, matricula: string, materia: string, nota: number) {
        let studentsList = read("./Alumnos.json");
        let found = studentsList.find((student: any) => (student.nombre === nombre) && (student.apellido === apellido) && (student.matricula === matricula));
        if(found) {
            let index = found.sociales.findIndex((subject: any) => subject.nombre === materia);
            if(found.sociales) {
                if(index > 0){
                found.sociales[index].nota = nota;
                } else {
                    console.log("Subject not found")
                }
            } else if(found.naturales) {
                if(index > 0) {
                found.naturales[index].nota = nota;
                } else {
                    console.log("Subject not found")
                }
            }
            this.deleteStudent(nombre, apellido, matricula);
            save("./Alumnos.json", found);
        } else {
            console.log("Student not found");
        }
    }

    showStudents() {
        console.log(read("./Alumnos.json"));
    }

    addTeacher(nombre: string, apellido:string, dni: number, fechaNac: string, email: string, celular: number) {
        let newTeacher = new Profesor(nombre, apellido, dni, fechaNac, email, celular);
        save("./Profesores.json", newTeacher);
    }

    deleteTeacher() {

    }

    addSubjects(modalidad: string, materia: string) {
        if(modalidad === "naturales") {
            let newSubject = new Naturales(materia, 0);
            save("./Naturales.json", newSubject);
        } else if(modalidad === "sociales") {
            let newSubject = new Sociales(materia, 0);
            save("./Sociales.json", newSubject);
        } else {
            console.log(`The modality ${modalidad} doesn't exist`);
        }
    }
}


