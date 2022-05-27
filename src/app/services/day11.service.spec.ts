import { Day11Service } from "./day11.service";

describe('11', () => {
  let service: any;
  let input: string[]
  beforeEach(() => {
    service = new Day11Service();
    input = [
      "[({(<(())[]>[[{[]{<()<>>",
      "[(()[<>])]({[<{<<[]>>(",
      "{([(<{}[<>[]}>{[]{[(<()>",
      "(((({<>}<{<{<>}{[]{[]{}",
      "[[<[([]))<([[{}[[()]]]",
      "[{[{({}]{}}([{[{{{}}([]",
      "{<[[]]>}<{[{[{[]{()[[[]",
      "[<(<(<(<{}))><([]([]()",
      "<{([([[(<>()){}]>(<<{{",
      "<{([{{}}[<[[[<>{}]]]>[]]"
    ];
  });

  // it(`part 1`, () => {
  //   let result = service.Part1(input);
  //   expect(result).toBe("26397");
  // });

  // it(`part 2`, () => {
  //   let result = service.Part2(input);
  //   expect(result).toBe("288957");
  // });

});