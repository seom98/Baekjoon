const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let len = input[0].split(" ").map(Number);
let start = input[1].split(" ").map(Number);
let sec = Number(input[2])
let aaa = ""
for (i = 0; i <= 1; i++) {
    let A = sec - (len[i] - start[i])
    let ans = 0
    if (A <= 0) {
        ans = start[i] + sec
    } else {
        if (parseInt(A / len[i]) % 2 === 0) {
            ans = len[i] - (A % len[i])
        } else {
            ans = (A % len[i])
        }
    }
    aaa += `${ans} `
}
console.log(aaa)
