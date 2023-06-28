function solution(input) {
    let n = Number(input[0]);
    let numbers = input[1].split(" ").map(Number);
    let count = 0
    for (let i = 0; i < n; i++) {
        let prime = 3
        while (true) {
            if (numbers[i] === 1) {
                break;
            } else if (numbers[i] === 2) {
                count++
                break;
            } else if (numbers[i] % 2 === 0) {
                break;
            } else if (prime <= Math.sqrt(numbers[i])) {
                if (numbers[i] % prime === 0) {
                    break;
                } else {
                    prime += 2
                }
            } else {
                count++
                break
            }
        }
    }

    console.log(count)
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