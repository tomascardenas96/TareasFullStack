import fs from "fs";
import readLineSync from "readline-sync"
import {Jugador, Deportes} from "./Jugador";

export class GestorClub {
    constructor() {
        fs.writeFileSync('socios.json', '[]');
}

private readFile() {
    return JSON.parse(fs.readFileSync("./socios.json", "utf8"));
}

agregarSocio() {
    let nombre: string = readLineSync.question("Ingrese el nombre del jugador: ");
    let apellido: string = readLineSync.question("Ingrese el apellido del jugador: ");
    let fechaNacimiento: string = readLineSync.question("Ingrese la fecha de nacimiento del jugador (MMM, DDD, YYY): ");
    let documento: string = readLineSync.question("Ingrese el documento del jugador: ");
    let telefono: string = readLineSync.question("Ingrese el telefono del jugador: ");

    let arrayDeportes: string[] = ["Futbol", "Basket", "Zumba", "Voley", "Natacion", "Gym"]
    let deporte: number = readLineSync.keyInSelect(arrayDeportes, "Ingrese el deporte que practica: ");

    let nuevoSocio:Jugador = new Jugador(nombre, apellido, fechaNacimiento, Number(documento), Number(telefono), deporte);
    let socios: any = [...this.readFile(), nuevoSocio];
    fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));
}

buscarPorNombre(nombre: string):string[] {
    let jugadores = [...this.readFile()];
    let jugadorEncontrado = jugadores.filter((person:any) => (person.nombre).toLowerCase() === (nombre).toLowerCase());
    console.log(jugadorEncontrado);
    return jugadorEncontrado;
}

buscarPorApellido(apellido: string):string[] {
    let jugadores = [...this.readFile()];
    let jugadorEncontrado = jugadores.filter((person:any) => (person.apellido).toLowerCase() === (apellido).toLowerCase());
    console.log(jugadorEncontrado);
    return jugadorEncontrado;
}

buscarPorDocumento(documento: string):string[] {
    let jugadores = [...this.readFile()];
    let jugadorEncontrado = jugadores.filter((person:any) => (person.documento).toLowerCase() === (documento).toLowerCase());
    console.log(jugadorEncontrado);
    return jugadorEncontrado;
}

buscarPorDeporte(deporte: number):string[] {
    let jugadores = [...this.readFile()];
    let jugadorEncontrado = jugadores.filter((person:any) => person.deporte === deporte);
    console.log(jugadorEncontrado);
    return jugadorEncontrado;
}
}



