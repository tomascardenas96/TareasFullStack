import { Vehicle } from "./AbstractVehicle";

class Camioneta extends Vehicle {
    private doubleTraction: boolean;
    private fuelType: string;
    private tiresNumber: number;

    constructor(brand: string, model: string, color: string, fuelType: string, tiresNumber: number) {
        super(brand, model, color);
        this.doubleTraction = false;
        this.fuelType = fuelType;
        this.tiresNumber = tiresNumber;
    }

    turnOnOff(): boolean {
        this.isOn = !this.isOn;
        console.log(this.isOn ? `You started the car `: `You have turned off the car`);
        return this.isOn;
    }
    speedUp(): number {
        if(this.isOn) {
            this.currSpeed += 20;
            console.log(`Your current speed is ${this.currSpeed} Km/h`);
        } else {
            console.log(`To speed up, you need to start the car first.`);
        }
        return this.currSpeed;
    }
    speedDown(): number {
        if(this.isOn) {
            this.currSpeed -= 20;
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
    honk(): void {
        if(this.isOn) {
            console.log(`Pi Piiiiip`);
        } else {
            console.log(`To honk, you need to start the car first.`);
        }
    }
    activate4x4(): boolean {
        if(this.isOn) {
            this.doubleTraction = !this.doubleTraction;
            console.log(this.doubleTraction ? `You have actived 4x4` : `You have deactivated 4x4`);
        } else {
            console.log(`To 4x4, you need to start the car first.`);
        }
        return this.doubleTraction;
    }
}