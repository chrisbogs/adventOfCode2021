import { Injectable } from "@angular/core";
import { Common } from "../utils/common";

@Injectable()
export class Diagnostic{
    private gammaRate:number = 0; // most common bit
    private epsilonRate:number = 0; // least common bit
    public get PowerConsumption() : number {
        return this.gammaRate * this.epsilonRate;
    }

    private oxygenGeneratorRating:number = 0; // most common bit
    private cO2ScrubberRating:number = 0; // least common bit
    public get LifeSupportRating() : number {
        return this.oxygenGeneratorRating * this.cO2ScrubberRating;
    }
    
    constructor(){}
    
    // read in the diagnostic report and produce the binary numbers.
    // assume all binary strings same length.
    public Read(diagnosticReport:string[]):void {
        if (diagnosticReport === null || diagnosticReport.length < 1)
            return;
            
        let mostCommonBitString:string = "";
        let binaryStringLength:number = diagnosticReport[0].length;
        
        for(let currentPosition = 0; currentPosition < binaryStringLength; currentPosition++){
            mostCommonBitString += this.GetMostCommonBitString(diagnosticReport, currentPosition, "1");
        }
        this.gammaRate = parseInt(mostCommonBitString, 2);
        this.epsilonRate = parseInt(Common.flipBitString(mostCommonBitString), 2);
        this.CalculateOxygenAndCo2Ratings(diagnosticReport, binaryStringLength);
    }
    
    private CalculateOxygenAndCo2Ratings(diagnosticReport:string[], binaryStringLength:number):void{
        let bitStrings = diagnosticReport.slice();
        this.oxygenGeneratorRating = this.FilterByBitCriteria(bitStrings, binaryStringLength, "1");
        this.cO2ScrubberRating = this.FilterByBitCriteria(bitStrings, binaryStringLength, "0", true);
        
    }
    
    // Returns the binary representation of the bit string left over after applying the 
    // bit criteria to the given list.
    private FilterByBitCriteria(bitStrings:string[], binaryStringLength:number, 
        tieBreaker:string, findLeastCommon:boolean=false):number{
        for(let currentPosition = 0; currentPosition < binaryStringLength; currentPosition++){
            let firstMostCommon = this.GetMostCommonBitString(bitStrings, currentPosition, tieBreaker, findLeastCommon);

            // filter values to those that have this value in their nth position
            bitStrings = bitStrings.filter((x) => x.charAt(currentPosition) == firstMostCommon);
            if (bitStrings.length === 1){
                return parseInt(bitStrings[0], 2);
            }
            
        }
        return 0; 
    }
    private GetMostCommonBitString(bitStringArray:string[], currentPosition:number, 
        tieBreaker:string, findLeastCommon:boolean=false):string{
        let counts0 = 0;
        let counts1 = 0;
        bitStringArray.forEach(element => {
            // check the i-th position in each string
            if (element.charAt(currentPosition) == "0"){
                counts0++;
            } 
            else{
                counts1++;
            }
        });
        let result:string = "1";
        if (counts0 > counts1) result = "0";
        if (findLeastCommon){
            result = result === "0" ? "1" : "0";
        }
        
        // tiebreaker MUST come last
        if (counts0 === counts1) result = tieBreaker;
        
        return result;
    }
    
}