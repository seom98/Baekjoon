function solution(input) {
    for (let i = 0; i < input.length-1; i++) {
        let count = 0
        let input0 = input[i].split("").map(Number)
        for (let j = 0; j < input0.length; j++) {
            if (input0[j] !== input0[input0.length - j - 1]) {
                console.log("no")
                count++
                break;
            }
        }
        if (count !== 1) {console.log("yes")}
    }
}

const { count } = require("console");
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