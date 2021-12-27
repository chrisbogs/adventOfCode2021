import { Grid } from "../models/grid";
import { Day9Service } from "./day9.service";

describe('9', () => {
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

  it('findbasins', () => {
    let basins = new Grid([
      "2199943210",
      "3987894921",
      "9856789892",
      "8767896789",
      "9899965678"])
      .FindBasins();
      expect(basins[0]).toEqual([5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8])
      expect(basins[1]).toEqual([0, 1, 1, 2, 2, 2, 3, 4, 4])
      expect(basins[2]).toEqual([5, 6, 6, 6, 7, 7, 8, 8, 8])
      expect(basins[3]).toEqual([1, 2, 3])
  });

  it(`part 1`, () => {
    let result = service.Part1(input);
    expect(result).toBe("15");
  });

  it(`part 2`, () => {
    let result = service.Part2(input);
    expect(result).toBe("1134");
  });

});