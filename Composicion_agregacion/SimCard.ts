export class SimCard {
    private carrier: string;
    private number: number;

    constructor(carrier: string, number: number) {
        this.carrier = carrier;
        this.number = number;
    }

    getInfo(): SimCard {
        return this;
    }
}