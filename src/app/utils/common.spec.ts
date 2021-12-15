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

});