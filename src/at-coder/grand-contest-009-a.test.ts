import { solution } from './grand-contest-009-a';

function convert(input: string): [number[], number[]] {
    const arrA: number[] = [];
    const arrB: number[] = [];
    let num = -1;

    for (const line of input.split('\n')) {
        if (num === -1) {
            num = parseInt(line, 10);
            continue;
        }

        const [aNum, bNum] = line.split(' ').map(e => parseInt(e, 10));
        arrA.push(aNum);
        arrB.push(bNum);
    }

    return [arrA, arrB];
}

describe('solution', () => {
    test('入力例1', () => {
        const input = `3
3 5
2 7
9 4`;

        const [arrA, arrB] = convert(input);
        const result = solution(arrA, arrB);
        expect(result).toBe(7);
    });
    test('入力例2', () => {
        const input = `7
3 1
4 1
5 9
2 6
5 3
5 8
9 7`;

        const [arrA, arrB] = convert(input);
        const result = solution(arrA, arrB);
        expect(result).toBe(22);
    });
});
