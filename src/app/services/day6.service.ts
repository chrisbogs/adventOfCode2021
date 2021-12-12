import { Injectable } from "@angular/core";
import { LanternFish } from "../models/LanternFish";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day6Service {
    constructor() { }

    public Part1(input: string[]): string {
        const daysToSimulate: number = 8;
        // create objects
        // I assume that the given input contains fish that are past their first cycle.
        let fish:LanternFish[] = input[0].split(',').map((age) => new LanternFish(parseInt(age), false));
        
        
        
        return "";
    }

    public Part2(input: string[]): string {
        return "";
    }
}
