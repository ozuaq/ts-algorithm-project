export class Solver {
    private readonly itemNum;
    private readonly items: [number, number, number][];
    private readonly optionNum;
    private readonly dp: number[][];

    constructor(itemNum: number, items: [number, number, number][]) {
        this.itemNum = itemNum;
        this.items = items;
        this.optionNum = this.items[0].length;
        this.dp = new Array(this.itemNum).fill(0).map(() => new Array(this.optionNum).fill(0));
    }

    updateDp(step: number) {
        for (let option = 0; option < this.optionNum; option++) {
            if (step === 0) {
                this.dp[step][option] = this.items[step][option];
                continue;
            }

            const another1 = (option + 1) % this.optionNum;
            const another2 = (option + 2) % this.optionNum;
            const prevStep = step - 1;
            this.dp[step][option] = Math.max(this.dp[prevStep][another1], this.dp[prevStep][another2]) + this.items[step][option];
        }
    }

    solve() {
        for (let i = 0; i < this.itemNum; i++) {
            this.updateDp(i);
        }

        let maxHappinessScore = 0;
        for (let option = 0; option < this.optionNum; option++) {
            maxHappinessScore = Math.max(maxHappinessScore, this.dp[this.dp.length - 1][option]);
        }

        return maxHappinessScore;
    }
}


export class InputParser {
    readonly items: [number, number, number][] = [];
    private itemNum = 0;
    constructor() { }

    parseLine(line: string) {
        if (this.itemNum === 0) {
            this.itemNum = parseInt(line, 10);
            return;
        }

        const [a, b, c] = line.split(' ').map(e => parseInt(e, 10));
        this.items.push([a, b, c]);
    }

    createSolver(): Solver {
        const solver = new Solver(this.itemNum, this.items);
        return solver;
    }
}


if (require.main === module) {
    process.stdin.setEncoding('utf8');

    const inputParser = new InputParser();

    const reader = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    reader.on('line', (line: string) => {
        inputParser.parseLine(line);
    });

    reader.on('close', () => {
        const solver = inputParser.createSolver();
        console.log(solver.solve());
    });
}