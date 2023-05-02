import { Vehicle } from "./AbstractVehicle";

class AutoDeportivo extends Vehicle {
    private displacement: number;
    private neonLightsColor: string;

    constructor(brand: string, model: string, color: string, displacement: number, neonLightsColor: string) {
        super(brand, model, color );
        this.displacement = displacement;
        this.neonLightsColor = neonLightsColor;
    }
 
    turnOnOff(): boolean {
        this.isOn = !this.isOn;
        console.log(this.isOn ? `You started the car `: `You have turned off the car`);
        return this.isOn;
    }
    speedUp(): number {
        if(this.isOn) {
            this.currSpeed += 25;
            console.log(`Your current speed is ${this.currSpeed} Km/h`);
        } else {
            console.log(`To speed up, you need to start the car first.`);
        }
        return this.currSpeed;
    }
    speedDown(): number {
        if(this.isOn) {
            this.currSpeed -= 25;
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
}