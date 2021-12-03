import { HttpClient, HttpHandler } from "@angular/common/http";
import { Day1Service } from "./services/day1.service";
import { PuzzleInput } from "./utils/PuzzleInput";

describe('Day1Service', () => {
  let service: Day1Service;
  beforeEach(() => { service = new Day1Service() });

  it(`first test`, () => {
    expect(service.day1Part1(
      ["199",
      "200",
      "208",
      "210",
      "200",
      "207",
      "240",
      "269",
      "260",
      "263"
    ])
    ).toBe("7");
  });
  //actual: 1446

});