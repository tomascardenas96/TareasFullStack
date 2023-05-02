import Auto from "./InterfaceAuto";

class AutoCarrera implements Auto {
    carBrand: string;
    carModel: string;
    color: string;
    isOn: boolean;
    fuelLevel: number;
    currSpeed: number;
    displacement: number;
    neonLightsColor: string;

   constructor(brand: string, model: string, color: string, displacement: number, neonLightsColor: string) {
       this.carBrand = brand;
       this.carModel = model;
       this.color = color;
       this.isOn = false;
       this.fuelLevel = 150;
       this.currSpeed = 0;
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