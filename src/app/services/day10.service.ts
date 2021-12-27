import { Injectable } from "@angular/core";
import { SyntaxParser } from "../models/SyntaxParser";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day10Service {
    public Part1(input: string[]): string {
        const parser = new SyntaxParser(["(", "[", "{", "<"],
            [")", "]", "}", ">"],
            [3, 57, 1197, 25137]);

        parser.ValidateLines(input);
        return parser.GetInvalidTokensScore().toString();
    }
    public Part2(input: string[]): string {
        const parser = new SyntaxParser(["(", "[", "{", "<"],
            [")", "]", "}", ">"],
            [1, 2, 3, 4]);

        parser.ValidateLines(input);
        return parser.GetAutoCompletedTokensScore().toString();
    }

}