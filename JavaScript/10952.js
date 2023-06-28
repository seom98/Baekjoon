function solution(input) {
	for (let i=0; i < input.length; i++) {
		let A = input[i].split(" ").map(element => Number(element));

		if (input[i] == "0 0") {
			break;
		}

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