import { SyntaxParser } from "../models/SyntaxParser";
import { Day10Service } from "./day10.service";

describe('10', () => {
  let service: any;
  let input: string[]
  beforeEach(() => {
    service = new Day10Service();
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

  it('valid parsings', () => {
    const parser = new SyntaxParser(["(", "[", "{", "<"],
      [")", "]", "}", ">"],
      [3, 57, 1197, 25137]);

    expect(parser.Validate("()")).toBe("");
    expect(parser.Validate("[]")).toBe("");
    expect(parser.Validate("{}")).toBe("");
    expect(parser.Validate("<>")).toBe("");
    expect(parser.Validate("([])")).toBe("");
    expect(parser.Validate("{()()()}")).toBe("");
    expect(parser.Validate("<([{}])>")).toBe("");
    expect(parser.Validate("[<>({}){}[([])<>]]")).toBe("");
    expect(parser.Validate("(((((((((())))))))))")).toBe("");
  });
  it('invalid parsings', () => {
    const parser = new SyntaxParser(["(", "[", "{", "<"],
      [")", "]", "}", ">"],
      [3, 57, 1197, 25137]);

    expect(parser.Validate("(]")).toBe("Expected ), but found ] instead.");
    expect(parser.Validate("{()()()>")).toBe("Expected }, but found > instead.");
    expect(parser.Validate("(((()))}")).toBe("Expected ), but found } instead.");
    expect(parser.Validate("<([]){()}[{}])")).toBe("Expected >, but found ) instead.");
    expect(parser.Validate("{([(<{}[<>[]}>{[]{[(<()>")).toBe("Expected ], but found } instead.");
    expect(parser.Validate("[[<[([]))<([[{}[[()]]]")).toBe("Expected ], but found ) instead.");
    expect(parser.Validate("[{[{({}]{}}([{[{{{}}([]")).toBe("Expected ), but found ] instead.");
    expect(parser.Validate("[<(<(<(<{}))><([]([]()")).toBe("Expected >, but found ) instead.");
    expect(parser.Validate("<{([([[(<>()){}]>(<<{{")).toBe("Expected ], but found > instead.");
  });
  
  it('invalid parsings', () => {
    const parser = new SyntaxParser(["(", "[", "{", "<"],
      [")", "]", "}", ">"],
      [1,2,3,4]);

    expect(parser.Validate("[({(<(())[]>[[{[]{<()<>>")).toBe("}}]])})]");    
    expect(parser.Validate("[(()[<>])]({[<{<<[]>>(")).toBe(")}>]})");
    expect(parser.Validate("(((({<>}<{<{<>}{[]{[]{}")).toBe("}}>}>))))");
    expect(parser.Validate("{<[[]]>}<{[{[{[]{()[[[]")).toBe("]]}}]}]}>");
    expect(parser.Validate("<{([{{}}[<[[[<>{}]]]>[]]")).toBe("])}>");
  });
  it(`part 1`, () => {
    let result = service.Part1(input);
    expect(result).toBe("26397");
  });

  it(`part 2`, () => {
    let result = service.Part2(input);
    expect(result).toBe("288957");
  });

});