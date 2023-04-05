"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.stock = function (auto) {
        console.log(auto);
    };
    RegistroAutomotor.prototype.consultar = function (auto, array) {
        var foundCar = array.filter(function (car) { return ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()); });
        if (foundCar.length) {
            console.log("El auto ".concat(auto, " ha sido encontrado."));
            console.log(foundCar);
            return foundCar;
        }
        else {
            console.log("El auto ".concat(auto, " no se encuentra en la base de datos"));
        }
    };
    RegistroAutomotor.prototype.borrar = function (auto, array) {
        var autoAeliminar;
        var index = array.length;
        while (index > 0) {
            autoAeliminar = array.findIndex(function (car) { return ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()); });
            if (autoAeliminar >= 0) {
                array.splice(autoAeliminar, 1);
            }
            index--;
        }
    };
    RegistroAutomotor.prototype.darDeAlta = function (auto, array) {
        if (auto) {
            array.push(auto);
            console.log("El auto ".concat(auto["marca"], " ").concat(auto["modelo"], " ha sido agregado a la base de dato"));
        }
        else {
            console.log("No se ha podido añadir el auto a la base de datos");
        }
    };
    RegistroAutomotor.prototype.actualizar = function (array) {
        var newAutos = JSON.stringify(array);
        fs.writeFileSync("./cars.json", newAutos, "utf8");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
;
