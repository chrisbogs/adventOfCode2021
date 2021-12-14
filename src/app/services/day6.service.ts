import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day6Service {
    public Part1(input: string[], daysToSimulate: number = 80): string {
        let allFish: number[] = input[0]
        .split(',')
        .map((age) => parseInt(age));

        let result = this.Simulate(daysToSimulate, allFish);
        return result.toString();
    }
    public Part2(input: string[], daysToSimulate: number = 256): string {
        let allFish: number[] = input[0]
        .split(',')
        .map((age) => parseInt(age));

        let result = this.Simulate(daysToSimulate, allFish);
        return result.toString();
    }
    
    // put each starting fish into a bucket.
    // There is one bucket per day in the cycle.
    // Each bucket has a count of the fish in that age.
    private Simulate(daysToSimulate: number, allFish: number[]):number {
        let newFish:number[] = new Array(9).fill(0);
        for (let x of allFish){
            newFish[x]++;
        }
        
        for (let i = 0; i < daysToSimulate; i++) {
            const aboutToSpawn = newFish[0];
            newFish[0] = newFish[1];
            newFish[1] = newFish[2];
            newFish[2] = newFish[3];
            newFish[3] = newFish[4];
            newFish[4] = newFish[5];
            newFish[5] = newFish[6];
            newFish[6] = newFish[7]; 
            newFish[7] = newFish[8];
            newFish[8] = aboutToSpawn;
            newFish[6] += aboutToSpawn;
        }
        return newFish.reduce((prev,curr)=>prev += curr);
    }
    
}