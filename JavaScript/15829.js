function solution(input) {
    let num = input[1].split("").map(element => element.charCodeAt()-96)
    let total = 0
    let r = 1
    const m = 1234567891
    for (let i = 0; i < input[0]; i++) {
        total += (num[i] * r) % m
        r = (r * 31) % m
        if (total >= m) {
            total %= m
        }
    }
    console.log(total)
}

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on("line", (line) => {
    if (!line) {
        rl.close()
    } else {
        input.push(line)
    }
}).on("close", () => {
    solution(input)
    process.exit()
})