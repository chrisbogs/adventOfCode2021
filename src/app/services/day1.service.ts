import { Injectable } from "@angular/core";
import { Common } from "../utils/common";

@Injectable()
export class Day1Service {
    
    constructor(){}
    
    public Part1(input:string[]): string {
        let nums = input.map((x) => parseInt(x));
        return Common.CountIncreases(nums).toString();
    }

    public Part2(input:string[]): string {
        let nums = input.map((x) => parseInt(x));
        return Common.CountIncreasesInThreeMeasurementWindow(nums).toString();
    }

}