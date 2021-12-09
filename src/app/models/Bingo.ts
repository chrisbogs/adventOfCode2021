class BingoTile {
    Marked:boolean = false;
    Value:number = 0;
    constructor(marked:boolean, value:number){
        this.Marked = marked; this.Value = value;
    }
    public toString = () : string => { return `${this.Marked ? 'x' : 'o'}${this.Value}`} 
    
}

export class Bingo{
    private Board: BingoTile[][];
    private readonly size = 5;
    public Done:boolean = false; // card has already won
    constructor(cardValues:number[]){
        this.Board = [];
        for(let i:number = 0; i< this.size; i++){
            this.Board[i] = [];
            for(let j:number = 0; j< this.size;j++){
                let nextValue:number = cardValues.pop()?? 0;
                this.Board[i][j] = new BingoTile(false, nextValue);
            }
        }
        
    }
    
    public GetBoard():BingoTile[][] { return this.Board; }
    public toString = () : string => { 
        let output:string = "\n";
        for(let i:number = 0; i< this.size; i++){
            for(let j:number = 0; j< this.size;j++){
                output += this.Board[i][j].toString() + "\t";
            }
            output += "\n"
        }
        return output;
    }
    
    public GetFinalScore(finalNumber:number):number { 
        // sum of all un-marked numbers in this Board
        let sum:number = 0;
        this.Board.forEach( (x) => {
            sum += x.filter((x)=> !x.Marked)
            .reduce((partialSum, n) => partialSum + n.Value, 0);
        })
        // * the final number
        return sum * finalNumber;
    }
    
    // Returns true if a line exists in the card either horizontally or vertically
    // in the 2D array.
    // TODO: Come back and improve this algorithm.
    public hasWon():boolean {
        // check row by row
        for(let i = 0; i < this.size; i++){
            if (this.Board[i].every((x)=>x.Marked)){
                this.Done = true;
                return true;
            }
        }

        // check row by column
        for(let c = 0; c < this.size; c++){
            let allMarked = true;
            for(let r = 0; r < this.size; r++){
                if (!this.Board[r][c].Marked){
                    allMarked = false;
                    break;
                    
                }
            }
            if (allMarked) {
                this.Done = true;
                return true;
            }
        }
        
        return false;
    }
    
    // Given a Bingo number, mark the tile on our card if it exists.
    // Return a boolean signifying if we have won or not.
    public NumberCalled(n:number):boolean{
        for(let i:number = 0; i< this.size; i++){
            for(let j:number = 0; j< this.size;j++){
                if (this.Board[i][j].Value == n){
                    this.Board[i][j].Marked = true;
                }
            }
        }
        return this.hasWon();
    }
    
}