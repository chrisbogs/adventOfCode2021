import { Day2Service } from "./day2.service";

describe('Day2Service', () => {
  let service:any;
  beforeEach(() => { service = new Day2Service() });

  it(`part 1`, () => {
    expect(service.Part1(
      ["forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2"
    ])
    ).toBe("150");
  });
  
  // it(`part 2`, () => {
  //   expect(service.Part2(
  //     ["forward 5",
  //       "down 5",
  //       "forward 8",
  //       "up 3",
  //       "down 8",
  //       "forward 2"
  //   ])
  //   ).toBe("5");
  // });

});