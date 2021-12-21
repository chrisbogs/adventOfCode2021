export class DisplayDigits {
    private zero: string = "";
    private one: string = "";
    private two: string = "";
    private three: string = "";
    private four: string = "";
    private five: string = "";
    private six: string = "";
    private seven: string = "";
    private eight: string = "";
    private nine: string = "";

    public get Zero(): string[] { return this.zero.split('').sort(); }
    public get One(): string[] { return this.one.split('').sort(); }
    public get Two(): string[] { return this.two.split('').sort(); }
    public get Three(): string[] { return this.three.split('').sort(); }
    public get Four(): string[] { return this.four.split('').sort(); }
    public get Five(): string[] { return this.five.split('').sort(); }
    public get Six(): string[] { return this.six.split('').sort(); }
    public get Seven(): string[] { return this.seven.split('').sort(); }
    public get Eight(): string[] { return this.eight.split('').sort(); }
    public get Nine(): string[] { return this.nine.split('').sort(); }

    constructor(zero: string,
        one: string,
        two: string,
        three: string,
        four: string,
        five: string,
        six: string,
        seven: string,
        eight: string,
        nine: string) {
        this.zero = zero;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
        this.six = six;
        this.seven = seven;
        this.eight = eight;
        this.nine = nine;
    }

    public toString = (): string => { return `${this.zero} ${this.one} ${this.two} ${this.three} ${this.four} ${this.five} ${this.six} ${this.seven} ${this.eight} ${this.nine}`; }

    public Lookup(n: string[]): string {
        let first = n.join('');
        if (first === this.Zero.join(''))
            return "0";
        if (first ===this.One.join(''))
            return "1";
        if (first ===this.Two.join(''))
            return "2";
        if (first ===this.Three.join(''))
            return "3";
        if (first ===this.Four.join(''))
            return "4";
        if (first ===this.Five.join(''))
            return "5";
        if (first ===this.Six.join(''))
            return "6";
        if (first ===this.Seven.join(''))
            return "7";
        if (first ===this.Eight.join(''))
            return "8";
        if (first ===this.Nine.join(''))
            return "9";
        return "-1";
    }
}