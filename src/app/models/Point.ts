export class Point {
    X:number;
    Y:number;        
    constructor(x:number, y:number){this.X = x; this.Y = y;}
    
    // Accepts a string of the form: "number,number"
    public static Parse(point:string):Point{
        let coordinates = point.split(',');
        return new Point(
            parseInt(coordinates[0]), 
            parseInt(coordinates[1]));
    }
    
    public Slope(other:Point):number{
        if (other.X == this.X && other.Y == this.Y) return 0; 
        let slope = (other.Y - this.Y) / (other.X - this.X)
        return slope;
    }
    public toString = () : string => { return `${this.X},${this.Y}`} 
    
    
}
