function solution(input) {
	let input0 = input[0].split("")
    let input1 = Number(input[1]);

	console.log(String(input0[input1-1]))
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