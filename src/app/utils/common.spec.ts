import { Common } from "./common";

describe('Common tests', () => {
    it(`flip bit string`, () => {
        expect(Common.flipBitString("0000")).toBe("1111");
        expect(Common.flipBitString("1111")).toBe("0000");
        expect(Common.flipBitString("0110")).toBe("1001");
    });
    it(`sum of series`, () => {
        expect(Common.SumOfSeriesInt(0)).toBe(0);
        expect(Common.SumOfSeriesInt(1)).toBe(1);
        expect(Common.SumOfSeriesInt(2)).toBe(3);
        expect(Common.SumOfSeriesInt(3)).toBe(6);
        expect(Common.SumOfSeriesInt(100)).toBe(5050);
    });
    it(`first diff`, () => {
        expect(Common.FindFirstDiff("and", "ancd")).toBe("c");
        expect(Common.FindFirstDiff("daf", "af")).toBe("d");
    });
    it(`first diff`, () => {
        expect(Common.FindAllDiff("and", "ancd")).toEqual(["c"]);
        expect(Common.FindAllDiff("daf", "af")).toEqual(["d"]);
        expect(Common.FindAllDiff("daf", "a")).toEqual(["d", "f"]);
        expect(Common.FindAllDiff("dacfg", "ac")).toEqual(["d", "f", "g"]);
        expect(Common.FindAllDiff("dacfg", "")).toEqual(["d", "a", "c", "f", "g"]);
    });
});