import { Day1Service } from "./services/day1.service";

describe('Day1Service', () => {
  let service: Day1Service;
  beforeEach(() => { service = new Day1Service() });

  it(`day 1 part 1`, () => {
    expect(service.day1Part1(
      ["199", "200", "208", "210", "200", "207", "240", "269", "260", "263"
    ])
    ).toBe("7");
  });
  it(`day 1 part 2`, () => {
    expect(service.day1Part2(
      ["199", "200", "208", "210", "200", "207", "240", "269", "260", "263"
    ])
    ).toBe("5");
  });

});