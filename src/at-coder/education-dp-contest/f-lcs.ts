export class Solver {
    private strA: string;
    private strB: string;

    constructor(strA: string, strB: string) {
        this.strA = strA;
        this.strB = strB;
    }

    solve(): string {
        const dp: number[][] = Array.from({ length: this.strA.length + 1 }, () => new Array(this.strB.length + 1).fill(0));

        for (let i = 1; i <= this.strA.length; i++) {
            for (let j = 1; j <= this.strB.length; j++) {
                if (this.strA[i - 1] === this.strB[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        let lcs = '';
        let i = this.strA.length;
        let j = this.strB.length;

        while (i > 0 && j > 0) {
            if (this.strA[i - 1] === this.strB[j - 1]) {
                lcs = this.strA[i - 1] + lcs;
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return lcs;
    }
}


export class InputParser {
    private lines: string[];

    constructor() {
        this.lines = [];
    }

    addLine(line: string) {
        this.lines.push(line);
    }

    createSolver(): Solver {
        const [strA, strB] = this.lines;
        return new Solver(strA, strB);
    }
}

if (require.main === module) {
    process.stdin.setEncoding('utf8');

    const reader = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const inputParser = new InputParser();

    reader.on('line', (line: string) => {
        inputParser.addLine(line);
    });

    reader.on('close', () => {
        const solver = inputParser.createSolver();
        console.log(solver.solve());
    });
}