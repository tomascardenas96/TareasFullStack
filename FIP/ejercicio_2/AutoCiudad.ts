import { Vehicle } from "./AbstractVehicle";

class AutoCiudad extends Vehicle {

    constructor(brand: string, model: string, color: string) {
        super(brand, model, color);
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