import { Injectable } from "@angular/core";
import { Common } from "../utils/common";
import { PuzzleInput } from "../utils/PuzzleInput";

@Injectable()
export class Day1Service {
    
    constructor(private inputReader: PuzzleInput){}
    
    public day1Part1(input:string[]): string {
        let nums = input.map((x) => parseInt(x));
        return Common.CountIncreases(nums).toString();
    }
}