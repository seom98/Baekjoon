function solution(input) {
	let input0 = Number(input[0]);
    let input1 = input[1].split(" ").map(element => Number(element));
	
	let max = -1000000;
	let min = 1000000;

	for (let i = 0; i <= input0-1; i++) {
		if (input1[i] >= max) {
			max = input1[i]
		}
		if (input1[i] <= min) {
			min = input1[i]
		}
	}
	console.log(`${min} ${max}`)
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