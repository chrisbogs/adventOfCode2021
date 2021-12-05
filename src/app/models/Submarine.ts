import { Injectable } from "@angular/core";

class Point {
    X:number;
    Y:number;        
    constructor(x:number, y:number){this.X = x; this.Y = y;}
}

class Direction {
    static FORWARD:string = "forward";
    static DOWN:string = "down";
    static UP:string = "up";
}

class Command {
    Direction:Direction;
    Amount:number;
    constructor(direction:Direction, amount:number){
        this.Direction = direction;
        this.Amount = amount;
    }
}

@Injectable()
export class Submarine{

    // 0, 0 is the surface of the water (entry point)
    // first value is horizontal position
    // second value is depth
    public CurrentPosition = new Point(0,0);
    public get CurrentPositionHash() {
         return this.CurrentPosition.X * this.CurrentPosition.Y;
    }
    
    public ParseCommands(input:string[]):Command[]{
        let commands:Command[] = [];
        for (let x of input){
            let s = x.split(' ');
            let direction:Direction = Direction.FORWARD;
            switch(s[0]){
                // case Direction.FORWARD:
                //     direction = Direction.FORWARD;
                //     break;
                case Direction.DOWN:
                    direction = Direction.DOWN;
                    break;
                case Direction.UP:
                    direction = Direction.UP;
                    break;            
            }
            
            let amount:number = parseInt(s[1]);
            commands.push(new Command(
                direction, amount
            ));
        }
        return commands;
    }
    
    public Move(commands:Command[]): void{
        for(var x of commands){
            if (x.Direction == Direction.FORWARD){
                this.CurrentPosition.X += x.Amount;
            }
            else if (x.Direction == Direction.UP){
                this.CurrentPosition.Y -= x.Amount;
            }
            else if (x.Direction == Direction.DOWN){
                this.CurrentPosition.Y += x.Amount;
            }
        }
    }
        
}