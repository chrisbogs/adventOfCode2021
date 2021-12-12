import { Day6Service } from "./day6.service";

describe('Day5Service', () => {
  let service:any;
  let input:string[]
  beforeEach(() => { service = new Day6Service();
    input = [
      "3,4,3,1,2"
  ]
  });

  it(`part 1`, () => {
    expect(service.Part1(input))
    .toBe("5934");
  });
  
  // it(`part 2`, () => {
  //   expect(service.Part2(input))
  //   .toBe("12");
  // });

});