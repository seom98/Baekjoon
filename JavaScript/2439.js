function solution(input) {
	let star = [" "]
	for (let i = 1; i <= input-1; i++) {
		star.push(" ");
	}
    for (let i = input; i >= 1; i--) {
    star.splice(i-1, 1, "*")

    console.log(star.join(""))
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