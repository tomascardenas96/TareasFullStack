import JuegoDeCasino from "./JuegoDeCasino";

export default class Poker extends JuegoDeCasino {
    private cantidadDeCartas: number;
    private cartasEnMano: any[];
    private isWin: boolean;


    constructor() {
        super()
        this.cantidadDeCartas = 2;
        this.cartasEnMano = [];
        this.isWin = false;
    }

    private getRandom(numero: number): number {
        return Math.floor(Math.random() * numero)
    }

    repartirCartas() {
            for(let i = 0; i < this.cantidadDeCartas ; i++) {
                this.cartasEnMano.push(this.getRandom(13));
                this.cartasEnMano[i] === 0 ? this.cartasEnMano[i] = "Az":
                this.cartasEnMano[i] === 1 ? this.cartasEnMano[i] = "K":
                this.cartasEnMano[i] === 2 ? this.cartasEnMano[i] = "Q":
                this.cartasEnMano[i] === 3 ? this.cartasEnMano[i] = "J":
                this.cartasEnMano[i] === 4 ? this.cartasEnMano[i] = "10":
                this.cartasEnMano[i] === 5 ? this.cartasEnMano[i] = "9":
                this.cartasEnMano[i] === 6 ? this.cartasEnMano[i] = "8":
                this.cartasEnMano[i] === 7 ? this.cartasEnMano[i] = "7":
                this.cartasEnMano[i] === 8 ? this.cartasEnMano[i] = "6":
                this.cartasEnMano[i] === 9 ? this.cartasEnMano[i] = "5":
                this.cartasEnMano[i] === 10 ? this.cartasEnMano[i] = "4":
                this.cartasEnMano[i] === 11 ? this.cartasEnMano[i] = "3":
                this.cartasEnMano[i] === 12 ? this.cartasEnMano[i] = "2":
                console.log("Error");
            }    
            console.log(`
    Te tocaron las cartas: 
    ${this.cartasEnMano[0]} y ${this.cartasEnMano[1]}
            `);
            
    }

    mostrarResultados() {
        let randomRes:number = this.getRandom(5);
        randomRes === 1 ? this.isWin = true: this.isWin = false;
        if(this.isWin === true) {
            console.log("Ganaste $4200!!");
            this.saldoActual += 4200;
        } else {
            console.log("Perdiste :(");
        }
    }
}

