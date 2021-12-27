export class SyntaxParser {

    private validOpenings: string[] = [];
    private validClosings: string[] = [];
    private InvalidTokens: string[] = [];
    private scoreMap: Map<string, number> = new Map<string, number>();
    private tokenMap: Map<string, string> = new Map<string, string>();
    private AutoCompleteTokens: number[] = [];

    // assume these three arrays are the same length for brevity
    constructor(openings: string[], closings: string[], scores: number[]) {
        this.validOpenings = openings;
        this.validClosings = closings;
        this.validClosings.forEach((v, i) => {
            this.scoreMap.set(v, scores[i]);
        });
        this.validOpenings.forEach((v, i) => {
            this.tokenMap.set(v, this.validClosings[i]);
        })
    }

    GetAutoCompletedTokensScore() {
        const sorted = this.AutoCompleteTokens.sort((a,b)=>a-b);
        return sorted[Math.floor(this.AutoCompleteTokens.length / 2)];
    }
    public GetInvalidTokensScore(): number {
        let result = 0;
        this.InvalidTokens.forEach(x => {
            const val = this.scoreMap.get(x);
            if (val !== undefined) {
                result += val;
            }
        });
        return result;
    }

    public Validate(line: string): string {
        let error = "";
        let openings: string[] = [];

        let characters: string[] = line.split('');
        openings.push(characters[0])
        for (let c of characters.splice(1)) {
            // validate character
            if (this.validClosings.indexOf(c) !== -1) {
                const expectedToken = this.tokenMap.get(openings[openings.length - 1]);
                if (expectedToken === c) {
                    // matching end token
                    openings.pop();
                }
                else {
                    this.InvalidTokens.push(c);
                    return `Expected ${expectedToken}, but found ${c} instead.`;
                }
            }
            else if (this.validOpenings.indexOf(c) !== -1) {
                // new open token
                openings.push(c);
            }
            else return "invalid character: " + c.toString();
        }

        if (openings.length > 0) {
            let lineScore = 0;
            let closings: string[] = [];
            openings.reverse().forEach(x => {
                const val = this.tokenMap.get(x);
                if (val !== undefined) {
                    closings.push(val);
                    const score = this.scoreMap.get(val);
                    if (score !== undefined) {
                        lineScore = lineScore * 5 + score;
                    }
                }
            })
            this.AutoCompleteTokens.push(lineScore);
            return closings.join('');
        }
        return error;
    }
    public ValidateLines(lines: string[]): void {
        this.InvalidTokens = [];
        this.AutoCompleteTokens = [];
        lines.forEach(x => {
            this.Validate(x);
        })
    }
}