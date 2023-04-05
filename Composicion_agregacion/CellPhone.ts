import { Battery } from "./Battery";
import { SimCard } from "./SimCard";

export class CellPhone {
    private make: string;
    private model: string;
    private simCard: SimCard[];
    private battery: Battery;
    
    constructor(make: string, model: string, battery: Battery) {
        this.make = make;
        this.model = model;
        this.simCard = [];
        this.battery = battery;
    }

    getInfo():CellPhone {
        return this;
    }

    setSimCard(SIM:SimCard) {
        this.simCard.push(SIM);
    } 
}


let bat:Battery = new Battery(1500, "Nose", "EIfj");

let cellphoneNew = new CellPhone("Prueba", "Siemens", bat);
