import { Injectable } from "@angular/core";
import { Submarine } from "../models/Submarine";
import { Common } from "../utils/common";

@Injectable()
export class Day2Service {
    
    constructor(){}
    
    public Part1(input:string[]): string {
        let sub = new Submarine();
        let commands = sub.ParseCommands(input);
        sub.Move(commands);
        return sub.CurrentPositionHash.toString();
    }

    public Part2(input:string[]): string {
        let nums = input.map((x) => parseInt(x));
        return Common.CountIncreasesInThreeMeasurementWindow(nums).toString();
    }

}