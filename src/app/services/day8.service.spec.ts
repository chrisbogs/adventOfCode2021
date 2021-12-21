import { DisplayDigits } from "../models/DisplayDigits";
import { Day8Service } from "./day8.service";

describe('8', () => {
  let service: any;
  let input: string[]
  beforeEach(() => {
    service = new Day8Service();
    input = [
      "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe",
      "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc",
      "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg",
      "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb",
      "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea",
      "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb",
      "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe",
      "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef",
      "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb",
      "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce"
    ]
  });

  it(`part 1`, () => {
    let result = service.Part1(input);
    expect(result).toBe("26");
  });

  it(`line 3 example`, () => {
    expect(service.Part2([
"be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe"]))
.toBe("8394");
    expect(service.Part2([
"edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc"]))
.toBe("9781");
    expect(service.Part2([
"fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg"]))
.toBe("1197");
    expect(service.Part2([
"fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb"]))
.toBe("9361");
    expect(service.Part2([
"aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea"]))
.toBe("4873");
    expect(service.Part2([
"fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb"]))
.toBe("8418");
    expect(service.Part2([
"dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe"]))
.toBe("4548");
    expect(service.Part2([
"bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef"]))
.toBe("1625");
    expect(service.Part2([
"egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb"]))
.toBe("8717");
    expect(service.Part2([
"gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce"]))
.toBe("4315");
  });

  it(`determine segments`, () => {
    let result: DisplayDigits = service.DetermineSegments(
      ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"]);
    expect(result.Three.join('')).toBe("abcdf");
    expect(result.One.join('')).toBe("ab");
    expect(result.Four.join('')).toBe("abef");
    expect(result.Seven.join('')).toBe("abd");
    expect(result.Zero.join('')).toBe("abcdeg");
    expect(result.Two.join('')).toBe("acdfg");
    expect(result.Five.join('')).toBe("bcdef");
    expect(result.Six.join('')).toBe("bcdefg");
    expect(result.Eight.join('')).toBe("abcdefg");
    expect(result.Nine.join('')).toBe("abcdef");
    // dddd
    // e    a
    // e    a
    //  ffff
    // g    b
    // g    b
    //  cccc
  });

  it(`part 2`, () => {
    let result = service.Part2(input);
    expect(result).toBe("61229");
  });
});


