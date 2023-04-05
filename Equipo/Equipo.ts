import * as fs from "fs";
import Bomba from "./Bomba";
import { Motor } from "./Motor";
import { Mangueras } from "./Kit_mangueras";
import { MotorCombustible } from "./M_combustible";
import MotorElectrico from "./M_electrico";

export default class Equipo {
   protected id: string; 
   private descripcion: string; 
   private fechaFabricacion: Date; 
   private fechaInstalacion: Date;
   private bomba:Bomba;
   private mangueras:Mangueras;
   private motor:(MotorCombustible | MotorElectrico);
   
   constructor(id:string, descripcion:string, fabricacion:Date, instalacion:Date, bomba:Bomba, mangueras:Mangueras, motor:(MotorCombustible | MotorElectrico)) {
    this.id = id;
    this.descripcion = descripcion;
    this.fechaFabricacion = fabricacion;
    this.fechaInstalacion = instalacion;
    this.bomba = bomba;
    this.mangueras = mangueras;
    this.motor = motor;
   }

   //Muestra todos los equipos agregados al array.
   todosLosEquipos(array:Equipo[]) {
    console.log(array);
   }

   //Agrega equipos nuevos al .json.
   agregar_equipo(array:Equipo[]) {
    array.push(this);
    console.log("The equipment has been added to database.");
   };

    //Lee la informacion del equipo que llama a este metodo.
   leer_equipo() {
    console.log(`
    Id: ${this.id}
    Descripcion: ${this.descripcion}
    Fecha de fabricacion: ${this.fechaFabricacion}
    Fecha de instalacion: ${this.fechaInstalacion});
    Bomba: ${this.bomba});
    Kit de mangueras: ${this.mangueras});
    Motor: ${this.motor}`);
   }

   //Elimina el equipo del array.
   eliminar_equipo(array:Equipo[]) {
    let equipoEncontrado:number = array.findIndex((item:any) => item === this);
        array.splice(equipoEncontrado, 1);  
   }

   //Edita el equipo seleccionado.
   editar_equipo(id:string, descripcion:string, fabricacion:Date, instalacion:Date, bomba:Bomba, mangueras:Mangueras, motor:(MotorCombustible | MotorElectrico)) {
    this.id = id;
    this.descripcion = descripcion;
    this.fechaFabricacion = fabricacion;
    this.fechaInstalacion = instalacion;
    this.bomba = bomba;
    this.mangueras = mangueras;
    this.motor = motor;
};
   };


















