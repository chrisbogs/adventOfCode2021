import { Day5Service } from "./day5.service";

describe('Day5Service', () => {
  let service:any;
  let input:string[]
  beforeEach(() => { service = new Day5Service();
    input = [
      "0,9 -> 5,9",
      "8,0 -> 0,8",
      "9,4 -> 3,4",
      "2,2 -> 2,1",
      "7,0 -> 7,4",
      "6,4 -> 2,0",
      "0,9 -> 2,9",
      "3,4 -> 1,4",
      "0,0 -> 8,8",
      "5,5 -> 8,2"
  ]
  });

  it(`part 1`, () => {
    expect(service.Part1(input))
    .toBe("5");
  });
  
  it(`part 2`, () => {
    expect(service.Part2(input))
    .toBe("12");
  });

});