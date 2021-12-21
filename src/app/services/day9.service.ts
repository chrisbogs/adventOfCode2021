import { Injectable } from "@angular/core";
import { Common } from "../utils/common";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day9Service {
    public Part1(input: string[]): string {
        //Read in input
        let heightPoints:number[][] = Array(input.length);
        input.forEach((x, i)=>{
            heightPoints[i] = x.split('').map(m=>parseInt(m));
        })
        heightPoints.forEach(x=>console.log(x));
        
        // for each number, check all adjacent cells for any number higher
        let minPoints:number[] = [];
        for(let c = 0; c < heightPoints.length; c++){
            for (let r = 0; r < heightPoints[c].length; r++){
                //check adjacent points
                let current = heightPoints[c][r];
                if (current == 9) continue
                //up
                if (r-1 >= 0){
                    let above = heightPoints[c][r-1];
                    if (above < current) continue; // not a min point
                }
                // console.log('height ' + heightPoints[c].length)
                if(r+1 < heightPoints[c].length){
                    let below = heightPoints[c][r+1];
                    if (below < current) continue //not a min point
                }
                if(c-1 >= 0){
                    let left = heightPoints[c-1][r];
                    if (left < current) continue; //not a min point
                }
                if (c+1 < heightPoints.length){
                    // console.log('c+1 ' + c + ' ' + heightPoints.length)
                    let right = heightPoints[c+1][r];
                    if (right < current) continue; // not a min point
                }
                console.log('min point: ' + current)
                minPoints.push(current);
            }
        }
        
        return minPoints.reduce((prev,curr)=>prev += curr+1, 0).toString();
    }
    public Part2(input: string[]): string {
        return ""
    }
}