"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(arrA, arrB) {
    let pushedNum = 0;
    for (let i = arrA.length - 1; i >= 0; i--) {
        const dividend = arrA[i] + pushedNum;
        const divisor = arrB[i];
        const mod = dividend % divisor;
        if (mod === 0) {
            continue;
        }
        pushedNum += divisor - mod;
    }
    return pushedNum;
}
if (require.main === module) {
    process.stdin.setEncoding('utf8');
    const arrA = [];
    const arrB = [];
    let num = -1;
    var reader = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    reader.on('line', (line) => {
        if (num === -1) {
            num = parseInt(line, 10);
            return;
        }
        const [aNum, bNum] = line.split(' ').map(e => parseInt(e, 10));
        arrA.push(aNum);
        arrB.push(bNum);
    });
    reader.on('close', () => {
        if (num === -1) {
            return;
        }
        const pushedNum = solution(arrA, arrB);
        console.log(pushedNum);
    });
}
