export class GridNode {
    public Value: number;
    constructor(value: number) {
        this.Value = value;
    }
    public toString = (): string => { return `${this.Value}` }
    public Visited: boolean = false;
}