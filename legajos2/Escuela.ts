import { Alumno } from "./Alumno";
import { Naturales, Sociales } from "./Materias";
import { Profesor } from "./Profesor";
import { save, read, check, write } from "./Functions";

export class Escuela {

    // Agrega un estudiante a la lista
    addStudent(nombre: string, apellido: string, dni: number, fechaNac: string, modalidad: string, curso: string) {
        // Traemos toda la informacion de Cursos.json(donde estan todos los cursos predefinidos) y lo agregamos al constructor de cada estudiante instanciado
        let cursos = read("./Cursos.json");
        let cursosFound = cursos.find((item:any) => item.nombre === curso);
        if(cursosFound) {
            let newStudent = new Alumno(nombre, apellido, dni, fechaNac, modalidad, cursosFound);
            save("./Alumnos.json", newStudent);
            console.log(`The student ${nombre} has been added correctly`);
        } else {
            console.log("Non-existent course");
            
        }
    }

    // Borra un alumno de la lista
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
    
    // Encuentra un estudiante de la lista
    findStudent(nombre: string, apellido: string, matricula: string): Object {
        let studentsList = read("./Alumnos.json");
        let found = studentsList.filter((student: any) => (student.nombre === nombre) && (student.apellido === apellido) || (student.matricula === matricula));
        console.log(found);
        return found;
    }

      // Modifica un alumno de la lista
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
    
      // Agrega / cambia la nota de una materia a un alumno
    addQualification(nombre: string, apellido: string, matricula: string, materia: string, nota: number) {
        let studentsList = read("./Alumnos.json");
        let found = studentsList.find((student: any) => (student.nombre === nombre) && (student.apellido === apellido) && (student.matricula === matricula));
        if(found) {
            let index;
            if(found.sociales) {
                 index = found.sociales.findIndex((subject: any) => subject.nombre === materia);
                if(index > 0){
                found.sociales[index].nota = nota;
                } else {
                    console.log("Subject not found")
                }
            } else if(found.naturales) {
                index = found.naturales.findIndex((subject: any) => subject.nombre === materia);
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

      // Muesta el listado de alumnos
    showStudents() {
        console.log(read("./Alumnos.json"));
    }

    // Añade un nuevo profesor al listado
    addTeacher(nombre: string, apellido:string, dni: number, fechaNac: string, email: string, celular: number) {
        let newTeacher = new Profesor(nombre, apellido, dni, fechaNac, email, celular);
        save("./Profesores.json", newTeacher);
    }

    // Borra un profesor del listado (pide todos los datos de manera obligatoria para mayor seguridad)
    deleteTeacher(nombre: string, apellido: string, contrato: string) {
        try {
            let teacherList = read("./Profesores.json");
            let deleted: number = teacherList.findIndex((teacher: any) => (teacher.nombre === nombre) && (teacher.apellido === apellido) && (teacher.contrato === contrato));
            if(deleted >= 0){
                teacherList.splice(deleted, 1);
                write("./Profesores.json", teacherList);
            } else {
                console.log("Teacher not found");
            }
        } catch(error) {
            console.log("The file cannot be found: 'deleteTeacher() method'");
        }
    }

    // Encuentra un profesor del listado
    findTeacher(nombre: string, apellido: string, contrato: string): Object {
        let teacherList = read("./Profesores.json");
        let found = teacherList.filter((teacher: any) => (teacher.nombre === nombre) && (teacher.apellido === apellido) || (teacher.contrato === contrato));
        console.log(found);
        return found;
    }

    // Modifica un profesor del listado
    modifyTeacher(nombre: string, apellido: string, contrato: string, nombreNuevo: string, apellNuevo: string, docNuevo: number) {
        let teacherList = read("./Profesores.json");
        let found = teacherList.find((teacher: any) => (teacher.nombre === nombre) && (teacher.apellido === apellido) && (teacher.contrato === contrato));
        if(found) {
            found.nombre = nombreNuevo;
            found.apellido = apellNuevo;
            found.documento = docNuevo;
            this.deleteTeacher(nombre, apellido, contrato);
            save("./Profesores.json", found);
        }
    }

    // Asigna las materias a cada profesor
    appointSubjTeachers(nombre: string, apellido: string, contrato: string, materia: string) {
        let sociales = read("./Sociales.json");
        let naturales = read("./Naturales.json");
        let subjects = [...sociales, ...naturales];
        let teachers = read("./Profesores.json");
        let foundSubj = subjects.find((subject: any) => subject.nombre === materia)
        let foundTeacher = teachers.find((teacher: any) => teacher.contrato === contrato);

        if(foundTeacher && foundSubj) {
        foundTeacher.materias.push(foundSubj);
        this.deleteTeacher(nombre, apellido, contrato);
        save("./Profesores.json", foundTeacher);
        } else {
            console.log("cannot found files");
        }
    }

    // Muesta el listado de profesores
    showTeachers() {
        console.log(read("./Profesores.json"));
    }

    // Agrega manualmente una materia a una de las dos modalidades disponibles (Naturales o Sociales)
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


