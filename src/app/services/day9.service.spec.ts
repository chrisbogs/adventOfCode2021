import { Day9Service } from "./day9.service";

describe('8', () => {
  let service: any;
  let input: string[]
  beforeEach(() => {
    service = new Day9Service();
    input = [
      "2199943210",
      "3987894921",
      "9856789892",
      "8767896789",
      "9899965678"
    ];
  });

  it(`part 1`, () => {
    let result = service.Part1(input);
    expect(result).toBe("15");
  });

});