import { Injectable } from "@angular/core";
import { DisplayDigits } from "../models/DisplayDigits";
import { Common } from "../utils/common";

@Injectable({ providedIn: "root" }) // Injectable anywhere
export class Day8Service {
    public Part1(input: string[]): string {
        let signalPatterns: string[][] = Array(10).fill("");
        let fourDigitOutputValue: string[][] = Array(4).fill("");
        input.forEach((x) => {
            let s = x.split(' | ')
            signalPatterns.push(s[0].split(' '));
            fourDigitOutputValue.push(s[1].split(' '));
        })

        // how many times do 1,4,7,8 appear in output?
        // 1=2, 4=4, 7=3, 8=7
        //0=6, 2=5, 3=5, 5=5, 6=6, 9=6
        let total: number = 0;
        for (let x of fourDigitOutputValue) {
            for (let y of x) {
                if ([2, 4, 3, 7].indexOf(y.length) > -1)
                    total++;
            }
        }

        return total.toString();
    }
    public Part2(input: string[]): string {
        let signalPatterns: string[][] = []
        let fourDigitOutputValues: string[][] = [];
        input.forEach((x) => {
            let s = x.split(' | ')
            signalPatterns.push(s[0].split(' '));
            fourDigitOutputValues.push(s[1].split(' '));
        })

        let segments: DisplayDigits[] = [];
        for (let signalPattern of signalPatterns) {
            segments.push(this.DetermineSegments(signalPattern));
        }

        // For each entry, determine all of the wire/segment connections and decode the four-digit output values.
        let result: number = 0;
        for (let i = 0; i < fourDigitOutputValues.length; i++) {
            let outputValue: string[] = fourDigitOutputValues[i];
            let actualDigits: string = "";
            for (let x of outputValue) {
                let sortedOutput: string[] = x.split('').sort();
                actualDigits += (segments[i].Lookup(sortedOutput))
            }
            result += parseInt(actualDigits);
        }

        //  What do you get if you add up all of the output values?
        return result.toString();
    }

    public DetermineSegments(signalPattern: string[]): DisplayDigits {
        const arr = signalPattern.slice();

        let one = arr.filter(x => x.length == 2)[0];
        let four = signalPattern.filter((x) => x.length == 4)[0]; //doesn't use top segment
        let seven = signalPattern.filter((x) => x.length == 3)[0];
        let eight = signalPattern.filter((x) => x.length == 7)[0];

        let ASegment: string = Common.FindFirstDiff(seven, one);

        let three = signalPattern.filter(x => x.length == 5
            && x.includes(one[0]) && x.includes(one[1]))[0];

        let GSegment = three.split('').filter(x => x !== ASegment
            && !one.split('').includes(x)
            && !four.split('').includes(x))[0];

        let DSegment = three.split('').filter(x =>
            x !== ASegment
            && x !== GSegment
            && !one.split('').includes(x))[0];

        let BSegment = four.split('').filter(x =>
            x !== DSegment
            && !one.split('').includes(x))[0];


        let five = signalPattern.filter(x => x.length == 5
            && Common.FindFirstDiff(three, x).length == 1
            && x.includes(BSegment))[0];

        let two = signalPattern.filter((x) => x.length == 5
            && x !== three
            && x !== five)[0];

        let zero = signalPattern.filter((x) => x.length == 6
            && !x.includes(DSegment))[0];

        let nine = signalPattern.filter((x) => x.length == 6
            && x != zero
            && one.split('').sort().every(y => x.split('').sort().includes(y))
        )[0]

        let six = signalPattern.filter((x) => x.length == 6
            && x != zero
            && x !== nine)[0];

        return new DisplayDigits(zero, one, two, three, four, five, six, seven, eight, nine);
    }
}