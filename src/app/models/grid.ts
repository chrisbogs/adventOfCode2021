import { GridNode } from "./GridNode";

export class Grid {
    private grid: GridNode[][];

    constructor(numbers: string[]) {
        this.grid = Array(numbers.length);
        numbers.forEach((x, i) => {
            this.grid[i] = x.split('').map(m => new GridNode(parseInt(m)));
        });
        // this.grid.forEach(x => console.log(x + ""));
    }

    public ValueAt(c: number, r: number): GridNode { return this.grid[c][r]; }
    public get Columns(): number {
        return this.grid.length;
    }
    public RowCount(columnNumber: number): number {
        return this.grid[columnNumber].length;
    }

    public lookAbove(r: number, c: number, ignoreVisited:boolean=false): boolean {
        if (r - 1 >= 0 && (ignoreVisited || !this.grid[c][r-1].Visited)) {
            return this.grid[c][r - 1].Value < this.grid[c][r].Value;
        }
        return false;
    }
    public lookBelow(r: number, c: number, ignoreVisited:boolean=false): boolean {
        if (r + 1 < this.grid[c].length && (ignoreVisited || !this.grid[c][r+1].Visited)) {
            return this.grid[c][r + 1].Value < this.grid[c][r].Value;
        }
        return false;
    }
    public lookLeft(r: number, c: number, ignoreVisited:boolean=false): boolean {
        if (c - 1 >= 0 && (ignoreVisited || !this.grid[c-1][r].Visited)) {
            return (this.grid[c - 1][r].Value < this.grid[c][r].Value);
        }
        return false;
    }
    public lookRight(r: number, c: number, ignoreVisited:boolean=false): boolean {
        if (c + 1 < this.grid.length && (ignoreVisited || !this.grid[c+1][r].Visited)) {
            return this.grid[c + 1][r].Value < this.grid[c][r].Value;
        }
        return false;
    }
    
    private isMinPoint(c: number, r: number, ignoreVisited:boolean=false): boolean {
        if (this.ValueAt(c, r).Value == 9) return false;
        if (this.lookAbove(r, c, ignoreVisited)) return false;
        if (this.lookBelow(r, c, ignoreVisited)) return false;
        if (this.lookLeft(r, c, ignoreVisited)) return false;
        if (this.lookRight(r, c, ignoreVisited)) return false;
        return true;
    }
    public FindMinPoints(): number[] {
        // for each number, check all adjacent cells for any number higher
        let minPoints: number[] = [];
        for (let c = 0; c < this.Columns; c++) {
            for (let r = 0; r < this.RowCount(c); r++) {
                if (this.isMinPoint(c, r)){
                    let current = this.ValueAt(c, r);
                    minPoints.push(current.Value);
                }
            }
        }
        return minPoints;
    }
    // Find all basins and return them all ordered by length.
    public FindBasins(): number[][] {
        // A basin is all locations that eventually flow downward to a single low point. 
        // Therefore, every low point has a basin, although some basins are very small. 
        // Locations of height 9 do not count as being in any basin, and all other locations will 
        // always be part of exactly one basin.
        // The size of a basin is the number of locations within the basin, including the low point.
        let basins: number[][] = [];

        for (let c = 0; c < this.Columns; c++) {
            for (let r = 0; r < this.RowCount(c); r++) {
                if (this.isMinPoint(c, r, true)) {
                    this.ValueAt(c, r).Visited = true;
                    //This is a min point, look for the rest of the basin points:
                    // for all the adjacent points, check if they are min points excluding the visited nodes
                    let basin:number[] = [this.ValueAt(c, r).Value].concat(this.checkAdjacentPoints(c, r));
                    basin = basin.sort();
                    basins.push(basin);
                }
            }
        }
        basins = basins.sort((a,b)=>b.length-a.length);
        return basins;
    }
    private checkAdjacentPoints(c: number, r: number):number[] {
        let basin:number[] = [];
        // check adjacent points and return the ones that are min points (of the unvisited)
        if (r - 1 >= 0 && !this.grid[c][r-1].Visited && this.isMinPoint(c, r-1)) {
            basin.push(this.ValueAt(c,r-1).Value);
            this.ValueAt(c,r-1).Visited = true;
            let rest = this.checkAdjacentPoints(c, r-1);
            if (rest.length > 0) basin = basin.concat(rest);
        }
        if (r + 1 < this.grid[c].length && !this.grid[c][r+1].Visited && this.isMinPoint(c, r + 1)){
            basin.push(this.ValueAt(c,r+1).Value);
            this.ValueAt(c,r+1).Visited = true;
            let rest = this.checkAdjacentPoints(c, r+1);
            if (rest.length > 0) basin = basin.concat(rest);
        }
        if (c - 1 >= 0 && !this.grid[c-1][r].Visited && this.isMinPoint(c-1, r)){
            basin.push(this.ValueAt(c-1,r).Value);
            this.ValueAt(c-1,r).Visited = true;
            let rest = this.checkAdjacentPoints(c-1, r);
            if (rest.length > 0) basin = basin.concat(rest);
        }
        if (c + 1 < this.grid.length && !this.grid[c+1][r].Visited && this.isMinPoint(c+1, r )){
            basin.push(this.ValueAt(c+1,r).Value);
            this.ValueAt(c+1,r).Visited = true;
            let rest = this.checkAdjacentPoints(c+1, r);
            if (rest.length > 0) basin = basin.concat(rest);
        }
        return basin;
    }

}

