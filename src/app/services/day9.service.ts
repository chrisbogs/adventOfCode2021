import { Injectable } from "@angular/core";
import { Grid } from "../models/grid";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day9Service {
    public Part1(input: string[]): string {
        let heightPoints: Grid = new Grid(input);
        let minPoints:number[] = heightPoints.FindMinPoints();
        return minPoints.reduce((prev,curr)=>prev += curr+1, 0).toString();
    }
    
    public Part2(input: string[]): string {
        let heightPoints: Grid = new Grid(input);
        let basins = heightPoints.FindBasins();
        let topThree = basins.slice(0, 3);
        return topThree.reduce((prev,curr)=>prev *= curr.length, 1).toString();
    }
}