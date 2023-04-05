import { Motor, Eficiencia } from "./Motor";

export default class MotorElectrico extends Motor {
    private voltaje:string;
    private consumoKwH: number;
    private isBajoConsumo: boolean;

    constructor(id:string, potencia:number, eficiencia:Eficiencia, fabricante:string, voltaje:string, consumo:number, bajoConsumo:boolean) {
        super(id, potencia, eficiencia, fabricante);
        this.voltaje = voltaje;
        this.consumoKwH = consumo;
        this.isBajoConsumo = bajoConsumo;
    }

    todosLosMotoresE(array:MotorElectrico[]) {
        console.log(array);
       }

    agregar_motorC(array:MotorElectrico[]) {
        array.push(this);
    }

    leer_motorC() {
        console.log(`
        Voltaje: ${this.voltaje} volts
        Consumo: ${this.consumoKwH}
        Bajo consumo: ${this.isBajoConsumo}
        `);
        
    }

    eliminar_motorC(array:MotorElectrico[]) {
        let equipoEncontrado:number = array.findIndex((item:any) => item === this);
        array.splice(equipoEncontrado, 1);  
    }

    editar_motorC(voltaje:string, consumo:number, bajoConsumo:boolean) {
        this.voltaje = voltaje;
        this.consumoKwH = consumo;
        this.isBajoConsumo = bajoConsumo;
    }
}