export class Matriz {
    private matriz:number[][];

    constructor () {
        this.matriz = [[1 ,2 ,3], [2, 3 , 4], [3, 4, 5], [4, 5, 6]];
    }

    get(x: number, y: number) {
        let counter:number = 0;
        let xLength:number = ((this.matriz).length);
        let yLength:number = ((this.matriz[0].length));
        
        if (x >= 0 && y >= 0 && x < xLength && y < yLength) {
        let foundNumber:number = this.matriz[x][y];
        console.table(this.matriz);
        console.log(`El numero ${foundNumber} se encuentra en las coordenadas x: ${x} y: ${y}`);
        return foundNumber;
        } else {
            console.log(`Error, el indice x: ${x} y: ${y} no existe`);
        }     
    }
}