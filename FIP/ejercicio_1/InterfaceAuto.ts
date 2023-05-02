export default interface Auto {
    carBrand: string;
    carModel: string;
    color: string;
    isOn: boolean;
    fuelLevel: number;
    currSpeed: number;

    turnOnOff(): boolean;
    speedUp(): number;
    speedDown(): number;
    brakeToZero(): number;
}