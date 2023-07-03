function solution(input) {
    let num = input.split(" ")
    let A = Number(num[0].split("").reverse().join(""))
    let B = Number(num[1].split("").reverse().join(""))
    if (A > B) {
        console.log(A)
    } else {
        console.log(B)
    }
};

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) => {
    input = line
    rl.close()
}).on("close", () => {
    solution(input)
    process.exit()
})