function solution(input) {
	let numbers = input.split(" ").map(element => Number(element));
	let A = numbers[0]
	let B = numbers[1]
	console.log(A+B)
	console.log(A-B)
	console.log(A*B)
	console.log((A-(A%B))/B)
	console.log(A%B)
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