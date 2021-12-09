import { Injectable } from "@angular/core";
import { Bingo } from "../models/Bingo";

interface ReturnType {
    NumbersCalled:number[];
    BingoCards:Bingo[];        
}

@Injectable({providedIn: "root"}) // Injectable anywhere
export class Day4Service {
    constructor(){}
    
    public Part1(input:string[]): string {
        let result = this.parseInput(input);
        return this.runBingo(result.NumbersCalled, 
            result.BingoCards,
            true);
        
    }

    public Part2(input:string[]): string {
        let result = this.parseInput(input);
        return this.runBingo(result.NumbersCalled, 
            result.BingoCards, 
            false);
    }
        
     
    private parseInput(input:string[]): ReturnType{
        let numbersCalled = input[0].split(',').map((x)=>parseInt(x));
        let bingoCards = input.slice(2);
        let bingoCard:number[] = [];
        let cards:number[][] = [];
        for(let line of bingoCards){
            if (line === "\n" || line === ""){
                // next card
                cards.push(bingoCard.slice());
                bingoCard = [];
            }
            
            if (line !== null && line.trim() !== ""){
                let parsedLine = line
                    .split(' ')
                    .filter((x)=>x !== null && x !== "")
                    .map((x)=>parseInt(x));
                if (parsedLine !== null){
                    bingoCard = bingoCard.concat(parsedLine);
                }
            }
        }
        let bingos:Bingo[] = [];
        cards.forEach( (card) =>{
            bingos.push(new Bingo(card));
        });
        
        return { NumbersCalled: numbersCalled,
                 BingoCards: bingos
                } as ReturnType;
    }
    private runBingo(numbersCalled:number[], bingos:Bingo[], firstWinnerOnly:boolean):string{
        let numberOfCards = bingos.length;
        for (let n of numbersCalled){
            for (let b of bingos){ 
                if (b.Done){
                    continue;
                }

                let won = b.NumberCalled(n);
                if (won){
                    numberOfCards--;
                    let winningScore = b.GetFinalScore(n).toString();
                    if (firstWinnerOnly || numberOfCards == 0){
                        return winningScore
                    }
                }
            }
        }
        return "No winners";
    }
}