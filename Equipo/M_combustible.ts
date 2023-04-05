import { Motor, Eficiencia } from "./Motor";

export enum Combustible {
    nafta= "Nafta", gasoil= "Gasoil", GNC= "GNC"
}

export class MotorCombustible extends Motor {
    private cilindros: number;
    private tipoCombustible: Combustible;

    constructor(id:string, potencia:number, eficiencia:Eficiencia, fabricante:string, cilindros:number, tipoCombustible:Combustible) {
        super(id, potencia, eficiencia, fabricante);
        this.cilindros = cilindros;
        this.tipoCombustible = tipoCombustible;
    }

    todosLosMotoresC(array:MotorCombustible[]) {
        console.log(array);
    }

    agregar_motorC(array:MotorCombustible[]) {
        array.push(this);
    }

    leer_motorC() {
        console.log(`
    Cilindros: ${this.cilindros}
    Tipo de combustible: ${this.tipoCombustible}
        `);
        
    }

    eliminar_motorC(array:MotorCombustible[]) {
        let equipoEncontrado:number = array.findIndex((item:any) => item === this);
        array.splice(equipoEncontrado, 1); 
    }

    editar_motorC(cilindros:number, tipoCombustible:Combustible) {
        this.cilindros = cilindros;
        this.tipoCombustible = tipoCombustible;
    }
}