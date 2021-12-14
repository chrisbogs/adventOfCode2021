export class LanternFish {
    private age: number;
    private isFirstCyle: boolean = true;

    // Assume that this object spawns a child every 7 days.
    // the first cycle last 2 days longer (9)
    constructor(age: number = 8, isFirstCyle: boolean = true) {
        this.age = age;
        this.isFirstCyle = this.isFirstCyle;
        // console.log("new Fish created");
    }

    public toString = (): string => { return `${this.age}` }

    SimulateDay(): LanternFish | null {
        // console.log("fish (" + this.age + ")");
        if (this.age <= 0) {
            //spawn new child
            this.age = 6;
            return new LanternFish();
        }
        else {
            this.age--;
        }
        return null;
    }
}