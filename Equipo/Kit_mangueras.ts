export enum Materiales {
    plastico= "Plastico", Hierro= "Hierro", aluminio= "Aluminio"
}

export class Mangueras {
    private id: string;
    private elementos: number;
    private medidaPulgadas: number;
    private roscasMaterial: Materiales;

    constructor(id:string, elementos:number, pulgadas:number, roscas:Materiales) {
        this.id = id;
        this.elementos = elementos;
        this.medidaPulgadas = pulgadas;
        this.roscasMaterial = roscas;
    }

    todosLosEquipos(array:Mangueras[]) {
        console.log(array);
       }

    agregar_kitM(array:Mangueras[]) {
        array.push(this);
    }

    leer_kitM() {
        console.log(`
        Id manguera: ${this.id}
        Elementos: ${this.elementos}
        Medida en pulgadas: ${this.medidaPulgadas}"
        Material de roscas: ${this.roscasMaterial}`);
    }

    eliminar_kitM(array:Mangueras[]) {
        let equipoEncontrado:number = array.findIndex((item:any) => item.id === this.id);
        array.splice(equipoEncontrado, 1); 
    }

    editar_kitM(id:string, elementos:number, pulgadas:number, roscas:Materiales) {
        this.id = id;
        this.elementos = elementos;
        this.medidaPulgadas = pulgadas;
        this.roscasMaterial = roscas;
    }

}