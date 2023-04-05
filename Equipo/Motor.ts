import Equipo from "./Equipo";
import Bomba from "./Bomba";
import { Mangueras, Materiales } from "./Kit_mangueras";

export enum Eficiencia {
    A= "A", B= "B", C= "C", D= "D", E= "E", F= "F"
}

export class Motor{
    protected id: string;
    private potenciaHp: number; 
    private eficiencia: Eficiencia;
    private fabricante: string;

    constructor(id:string, potencia:number, eficiencia:Eficiencia, fabricante:string) {
        this.id = id;
        this.potenciaHp = potencia;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }

    todosLosMotores(array:Motor[]) {
        console.log(array); 
    }

    agregar_motor(array:Motor[]) {
        array.push(this);
    }

    leer_motor() {
        console.log(`
    Id: ${this.id}
    Potencia Hp: ${this.potenciaHp}
    Eficiencia: ${this.eficiencia}
    Fabricante: ${this.fabricante}`);
    }

    eliminar_motor(array:Motor[]) {
        let equipoEncontrado:number = array.findIndex((item:any) => item === this);
        array.splice(equipoEncontrado, 1);  
    }

    editar_motor(potencia:number, eficiencia:Eficiencia, fabricante:string) {
        this.potenciaHp = potencia;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }
}