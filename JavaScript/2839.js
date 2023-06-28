function solution(input) {
    let count = 0;

    while (true) {
        if (input % 5 === 0) {
            console.log(input / 5 + count);
            break;
        }

        if (0 > input) {
            console.log(-1);
            break;
        }

        count++;
        input -= 3;
    }
}
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