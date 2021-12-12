import { Point } from "./Point";

export class Line {
    private readonly start:Point;
    private readonly end:Point;

    constructor(start:Point, end:Point){
        this.start = start; this.end = end;
    }
    public toString = () : string => { return `${this.start} ${this.end}`} 
    
    public PrintPoints(){
        let output:string = "";
        let slope:number;

        let run = this.end.X-this.start.X; 
        if (run === 0) run= 1;
        slope = (this.end.Y-this.start.Y)/ run;
        let b:number = this.start.Y - (slope*this.start.X);        

        if (this.start.X === this.end.X){
            //vertical line
            let max = Math.max(this.start.Y, this.end.Y);
            let min = Math.min(this.start.Y, this.end.Y);
            for(let i:number = min; i <= max; i++){
                output += new Point(this.start.X,i) + " | "
            }            
        }
        else{
            let max = Math.max(this.start.X, this.end.X);
            let min = Math.min(this.start.X, this.end.X);
            for(let i = min; i <= max; i++){
                let y = Math.floor((slope*i) + b);
                output += new Point(i,y) + " | "
            }               
        }

        console.log(output);
    }
    
    // Uses the line formula y = mx+b to calculate a 
    // set of all points in this line.
    public get AllPoints():Set<Point> {
        let points:Set<Point> = new Set<Point>();
        let slope:number;

        let run = this.end.X-this.start.X; 
        if (run === 0) run= 1;
        slope = (this.end.Y-this.start.Y)/ run;
        let b:number = this.start.Y - (slope*this.start.X);        

        if (this.start.X === this.end.X){
            //vertical line
            let max = Math.max(this.start.Y, this.end.Y);
            let min = Math.min(this.start.Y, this.end.Y);
            for(let i:number = min; i <= max; i++){
                points.add(new Point(this.start.X,i))
            }            
        }
        else{
            let max = Math.max(this.start.X, this.end.X);
            let min = Math.min(this.start.X, this.end.X);
            for(let i = min; i <= max; i++){
                let y = Math.floor((slope*i) + b);
                points.add(new Point(i,y))
            }               
        }

        return points;
    }
    
    // given an array of lines, return a 2 dimensional array 
    // holding the count of the number of times each (x,y) appears.
    // Those with a value > 1 are points of intersection.
    public static BuildCountOfPoints(lines: Line[]) {
        let allPoints = [];
        for (let l of lines) {
            for (let p of l.AllPoints) {
                allPoints.push(p);
            }
        }

        const map: number[][] = new Array();
        for (let k = 0; k < 1000; k++) {
            map[k] = new Array(1000).fill(0);
        }

        for (let p of allPoints) {
            map[p.X][p.Y] += 1;
        }
        return map;
    }
    
    // Given points in a line in the form:
    // x1,y1 -> x2,y2
    // Return an array of the point objects.
    public static ParseLines(input: string[], includeDiagonalLines:boolean = false) {
        let lines:Line[] = []
        input.forEach((x) => {
            let split = x.split(" -> ");
            let start: Point = Point.Parse(split[0]);
            let end: Point = Point.Parse((split[1]));
            if (includeDiagonalLines || (start.X === end.X || start.Y === end.Y))
                lines.push(new Line(start, end));
        });
        return lines;
    }
}