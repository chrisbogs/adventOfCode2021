import { Injectable } from "@angular/core";
import { Line } from "../models/Line";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day5Service {
    constructor() { }

    public Part1(input: string[]): string {
        // read in the start point and end points
        let lines: Line[] = Line.ParseLines(input);
        const map: number[][] = Line.BuildCountOfPoints(lines);

        // determine the number of points 
        // where at least two lines overlap
        let count = 0;
        for (let x of map) {
            for (let c of x) {
                if ((c) >= 2) {
                    count++;
                }
            }
        }

        return count.toString();
    }
    
    public Part2(input: string[]): string {
        // read in the start point and end points
        let lines: Line[] = Line.ParseLines(input, true);
        const map: number[][] = Line.BuildCountOfPoints(lines);

        // determine the number of points 
        // where at least two lines overlap
        let count = 0;
        for (let x of map) {
            for (let c of x) {
                if ((c) >= 2) {
                    count++;
                }
            }
        }

        return count.toString();
    }
}
