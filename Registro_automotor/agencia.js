"use strict";
// Ejercicio 1
// • Usando la clase Auto: Implementar la clase 
// RegistroAutomotor con métodos para consultar 
// por un auto en un listado, borrar, actualizar y dar 
// de alta
// • Partir de la función ya implementada para leer 
// archivos
exports.__esModule = true;
var fs = require("fs");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var Autos_1 = require("./Autos");
var cars = [];
try {
    var data = fs.readFileSync("./cars.json", "utf8");
    var concess = JSON.parse(data);
    cars = concess.map(function (car) { return car; });
}
catch (error) {
    var errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}
var registro = new RegistroAutomotor_1.RegistroAutomotor;
var cruze = new Autos_1.Autos("Chevrolet", "Cruze", 2017);
registro.actualizar(cars);
console.log(cars);
