import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day7Service {
    public Part1(input: string[]): string {
        //naive algorithm: move the first crab one space
        let crabs: number[] = input[0].split(',').map((x) => parseInt(x));
        let lowestFuelCost: number = Number.MAX_SAFE_INTEGER;

        // Can I assume that one of the crabs will always stay where it is?

        // for(let i = 0; i < crabs.length; i++){
        //     // find sum of distance away from origin crab
        //     let fuelNeeded:number = 0;
        //     let subSection = crabs.slice();
        //     subSection.splice(i, 1);

        //     for(let x of subSection){
            //         fuelNeeded += Math.abs(crabs[i] - x);
            //         // console.log("fuelNeeded: " + fuelNeeded + " " + crabs[i] + " " + x)
            //     }
            //     lowestFuelCost = Math.min(fuelNeeded, lowestFuelCost)
            //     console.log("origin:" + subSection + " lowest: " + lowestFuelCost);
            // }
            const min = crabs.reduce((x,y)=>Math.min(x,y));
            const max = crabs.reduce((x,y)=>Math.max(x,y));
            // console.log(crabs.length + " " + max + " " + min);
            for (let i = min; i < max; i++) {
            // find sum of distance away from origin
            let fuelNeeded: number = 0;
            for (let x of crabs) {
                fuelNeeded += Math.abs(i - x);
                // console.log("fuelNeeded: " + fuelNeeded + " " + crabs[i] + " " + x)
            }
            lowestFuelCost = Math.min(fuelNeeded, lowestFuelCost)
            // console.log("lowest: " + fuelNeeded + " " + lowestFuelCost);
        }

        return lowestFuelCost.toString();
    }
    public Part2(input: string[]): string {
        return "";
    }

}