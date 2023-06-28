function solution(input) {

    let num = []
    for (let i = 0; i < input.length; i++) {
        num.push(input[i] % 42)
    }
    let test = [...new Set(num)]
    console.log(test.length)
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