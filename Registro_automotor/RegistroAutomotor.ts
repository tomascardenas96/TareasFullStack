import { Autos } from "./Autos";
import * as fs from "fs";

export class RegistroAutomotor {

    stock(auto:Autos[]) {
        console.log(auto);
    }

    consultar(auto:string, array:Autos[]) {
        let foundCar: Autos[] = array.filter((car:any) => ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()));
        if(foundCar.length) {
            console.log(`El auto ${auto} ha sido encontrado.`);
            console.log(foundCar);
            return foundCar;
        } else {
            console.log(`El auto ${auto} no se encuentra en la base de datos`);
        }
    }

    borrar(auto:string, array:Autos[]) {
        let autoAeliminar:number;
        let index:number = array.length;
        while (index > 0) {
            autoAeliminar= array.findIndex((car:any) => ((car.marca).toLowerCase() === (auto).toLowerCase()) || ((car.modelo).toLowerCase() === (auto).toLowerCase()));
            if (autoAeliminar >= 0) {
            array.splice(autoAeliminar, 1);
            }
        index--;
    }
}

darDeAlta(auto:Autos, array:Autos[]) {
    if(auto) {
        array.push(auto);
            console.log(`El auto ${auto["marca"]} ${auto["modelo"]} ha sido agregado a la base de dato`);
            
        } else {
            console.log("No se ha podido añadir el auto a la base de datos");
            
        }
    }

    actualizar(array:Autos[]) {
        let newAutos = JSON.stringify(array);
        fs.writeFileSync("./cars.json", newAutos, "utf8");
    }
};