import { Injectable } from "@angular/core";
import { Common } from "../utils/common";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day7Service {
    public Part1(input: string[]): string {
        let crabs: number[] = input[0].split(',').map((x) => parseInt(x));
        let lowestFuelCost: number = Number.MAX_SAFE_INTEGER;

        const min = crabs.reduce((x, y) => Math.min(x, y));
        const max = crabs.reduce((x, y) => Math.max(x, y));
        for (let i = min; i < max; i++) {
            // find sum of distance away from origin
            let fuelNeeded: number = 0;
            for (let x of crabs) {
                fuelNeeded += Math.abs(i - x);
            }
            lowestFuelCost = Math.min(fuelNeeded, lowestFuelCost)
        }

        return lowestFuelCost.toString();
    }
    public Part2(input: string[]): string {
        let crabs: number[] = input[0].split(',').map((x) => parseInt(x));
        let lowestFuelCost: number = Number.MAX_SAFE_INTEGER;

        const min = crabs.reduce((x, y) => Math.min(x, y));
        const max = crabs.reduce((x, y) => Math.max(x, y));
        for (let i = min; i < max; i++) {
            // find sum of distance away from origin
            let fuelNeeded: number = 0;
            for (let x of crabs) {
                fuelNeeded += Common.SumOfSeriesInt(Math.abs(i - x));
            }
            lowestFuelCost = Math.min(fuelNeeded, lowestFuelCost)
        }

        return lowestFuelCost.toString();
    }

}