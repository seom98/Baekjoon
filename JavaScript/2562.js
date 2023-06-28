function solution(input) {
    let numbers = input.map(element => Number(element));

    console.log(Math.max(...numbers))
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] == Math.max(...numbers)) {
            console.log(i+1)
            break;
        }
    }
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