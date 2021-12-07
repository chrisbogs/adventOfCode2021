import { Injectable } from "@angular/core";
import { Diagnostic } from "../models/Diagnostic";

@Injectable()
export class Day3Service {
    
    constructor(){}
    
    public Part1(input:string[]): string {
        let d = new Diagnostic()
        d.Read(input);
        console.log(d.PowerConsumption);
        return d.PowerConsumption.toString();
    }

    public Part2(input:string[]): string {
        let d = new Diagnostic()
        d.Read(input);
        return d.LifeSupportRating.toString();
    }

}