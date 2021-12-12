export class LanternFish{
    private age: number;
    private isFirstCyle:boolean = true;

    // Assume that this object spawns a child every 7 days.
    // the first cycle last 2 days longer (9)
    constructor(age:number = 8, isFirstCyle:boolean=true){
        this.age = age;
        this.isFirstCyle = this.isFirstCyle;
    }
}