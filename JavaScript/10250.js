function solution(input) {
    let input0 = Number(input[0]);
    let arr = [];
    let a = 0;
    let b = 0;

    for (let i = 1; i <= input0; i++) {
        arr = input[i].split(" ").map(Number);
        if (arr[2] % arr[0] == 0) {
            a = arr[0]
            b = parseInt(arr[2] / arr[0])
        } else {
            a = (arr[2] % arr[0])
            b = parseInt(arr[2] / arr[0]) + 1
        }
        console.log(a*100 + b)
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