function solution(input) {
	let numbers = input.split(" ").map(element => Number(element));
	let plus = 0
	for (let element of numbers) {
		plus = plus + (element*element)
};
	console.log(plus % 10);
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