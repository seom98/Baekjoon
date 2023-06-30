function solution(input) {
    let num = Number(input);
    let result = '';
    for (let i = num; i >= 1; i--) {
        result = result + `${i} \n`;
    }
    console.log(result);
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