function solution(input) {
	let input0 = Number(input[0]);

	for (let i=1; i <= input0; i++) {
		let A = input[i].split(" ").map(element => Number(element));
		console.log(A[0] + A[1])
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