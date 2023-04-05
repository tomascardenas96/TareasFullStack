export default class Bomba{
    private id: string;
    private caudalEntrada: number;
    private caudalSalida: number;
    private fabricante: string;

    constructor(id: string, entrada: number,salida: number,fabricante: string) {
            this.id = id;
            this.caudalEntrada = entrada;
            this.caudalSalida = salida;
            this.fabricante = fabricante;
    }

    todasLasBombas(array:Bomba[]) {
        console.log(array);
       }

    agregar_bomba(array:Bomba[]) {
        array.push(this);
        console.log("The pump has been added to database.")
    }

    leer_bomba() {
        console.log(`
        Id bomba: ${this.id}"
        Caudal de entrada: ${this.caudalEntrada}"
        Caudal de salida: ${this.caudalSalida}"
        Fabricante: ${this.fabricante}
        `);
        
    }

    eliminar_bomba(array:Bomba[]) {
        let equipoEncontrado:number = array.findIndex((item:any) => item.id === this.id);
        array.splice(equipoEncontrado, 1);  
    }

    editar_bomba(entrada:number,salida:number,fabricante:string) {
        this.caudalEntrada = entrada;
        this.caudalSalida = salida;
        this.fabricante = fabricante;
    }
}