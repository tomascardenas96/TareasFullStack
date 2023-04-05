// Ejercicio 1
// • Usando la clase Auto: Implementar la clase 
// RegistroAutomotor con métodos para consultar 
// por un auto en un listado, borrar, actualizar y dar 
// de alta
// • Partir de la función ya implementada para leer 
// archivos

import * as fs from "fs";
import { RegistroAutomotor } from "./RegistroAutomotor";
import { Autos } from "./Autos";


let cars:Autos[] = [];

try {
    const data:string = fs.readFileSync("./cars.json", "utf8");
    let concess = JSON.parse(data);
    cars = concess.map((car:{}) => car);
} catch (error) {
    let errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}

const registro:RegistroAutomotor = new RegistroAutomotor;

let cruze: Autos = new Autos("Chevrolet", "Cruze", 2017);



registro.actualizar(cars);
console.log(cars);








