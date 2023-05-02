import Auto from "./InterfaceAuto";

class AutoFamiliar implements Auto {
     carBrand: string;
     carModel: string;
     color: string;
     isOn: boolean;
     fuelLevel: number;
     currSpeed: number;

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
    speedUp(): number {
        if(this.isOn) {
            this.currSpeed += 10;
            console.log(`Your current speed is ${this.currSpeed} Km/h`);
        } else {
            console.log(`To speed up, you need to start the car first.`);
        }
        return this.currSpeed;
    }
    speedDown(): number {
        if(this.isOn) {
            this.currSpeed -= 10;
            console.log(`Your current speed is ${this.currSpeed} Km/h`);
        } else {
            console.log(`To speed down, you need to start the car first.`);
        }
        return this.currSpeed;
    }
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

let fitito = new AutoFamiliar("Fiat", "600", "Red");

// fitito.turnOnOff();
// fitito.turnOnOff();
// fitito.speedUp();
