function solution(input) {
    let input0 = input.split(" ").map(Number);

    console.log(Math.ceil((input0[2]-input0[1]) / (input0[0]-input0[1])))
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