export abstract class Vehicle {
    carBrand: string;
     protected carModel: string;
     protected color: string;
     protected isOn: boolean;
     protected fuelLevel: number;
     protected currSpeed: number;

    constructor(brand: string, model: string, color: string) {
        this.carBrand = brand;
        this.carModel = model;
        this.color = color;
        this.isOn = false;
        this.fuelLevel = 100;
        this.currSpeed = 0;
    }

    turnOnOff(): boolean {
        this.isOn = !this.isOn;
        console.log(this.isOn ? `You started the car `: `You have turned off the car`);
        return this.isOn;
    }

    abstract speedUp(): void;
    
    abstract speedUp(): void;

    brakeToZero(): number {
        if(this.isOn) {
            this.currSpeed = 0;
            console.log(`Your current speed is ${this.currSpeed} Km/h`);
        } else {
            console.log(`To brake, you need to start the car first.`);
        }
        return this.currSpeed;
    }
    honk() {
        if(this.isOn) {
            console.log(`Pi Piiiiip`);
        } else {
            console.log(`To honk, you need to start the car first.`);
        }
    }
}