function solution(input) {
    let num = input[1].split("").map(element => element.charCodeAt()-96)
    let total = 0
    for (let i = 0; i < input[0]; i++) {
        total += num[i] * (31 ** i)
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