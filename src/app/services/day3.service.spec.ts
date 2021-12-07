import { Common } from "../utils/common";
import { Day3Service } from "./day3.service";

describe('Day3Service', () => {
  let service:any;
  let input:string[]
  beforeEach(() => { service = new Day3Service();
  input = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010"
  ]});

  it(`part 1`, () => {
    expect(service.Part1(input))
    .toBe("198");
  });
  it(`flipBitString`, () => {
    expect(Common.flipBitString('010'))
    .toBe("101");
    expect(Common.flipBitString('100'))
    .toBe("011");
  });
  
  it(`part 2`, () => {
    expect(service.Part2(input))
    .toBe("230");
  });

});