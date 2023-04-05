import JuegoDeCasino from "./JuegoDeCasino";
import Casino from "./Casino";

export default class Ruleta extends JuegoDeCasino {
    private numeroElegido: number;
    private colorElegido: number;
    private esPar: number;
    private numeroSaliente: number;
    private colorSaliente: number;
    private parOimparSaliente: number;
    private general: Casino;

    constructor(general: Casino) {
        super();
        this.numeroElegido = -1;
        this.colorElegido = -1;
        this.esPar = -1;
        this.numeroSaliente = -1;
        this.colorSaliente = -1;
        this.parOimparSaliente = -1;
        this.general = general;
    }

    private getRandom(numero: number): number {
        return Math.floor(Math.random() * numero)
    }

    hacerApuesta(numero: number, color: number, esPar: number) {
        this.numeroElegido = numero;
        this.colorElegido = color;
        this.esPar = esPar;
        console.log(`
        Numero elegido: ${this.numeroElegido}
        Color elegido: ${this.colorElegido === 0 ? `Rojo` : `Negro`}
        Par o impar?: ${this.esPar === 0 ? `Par` : `Impar`}
        `);
        
    }

    girarRuleta() {
        this.numeroSaliente = this.getRandom(36);
        this.colorSaliente = this.getRandom(2)
        this.parOimparSaliente = this.getRandom(2);
        console.log(`
        Salio el numero: ${this.numeroSaliente}
        Salio el color: ${this.colorSaliente === 0 ? `Rojo` : `Negro`}
        Salio par o impar?: ${this.parOimparSaliente === 0 ? `Par` : `Impar`}
        `);
    }

    mostrarResultados() {
        if(this.numeroElegido === this.numeroSaliente && this.colorElegido === this.colorSaliente && this.esPar === this.parOimparSaliente) {
            this.saldoActual += 5000;
            console.log(`Felicidades sumaste $500!!!`);
        } else if(this.numeroElegido !== this.numeroSaliente && this.colorElegido === this.colorSaliente && this.esPar === this.parOimparSaliente) {
            this.saldoActual += 2300;
            console.log(`Felicidades sumaste $2300!!!`);
        } else {
            console.log(`Vuelve a intentar.`);
        }
}
}
