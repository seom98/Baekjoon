function solution(input) {
    let num = input.split(" ").map(Number)
    let a = Math.max(...num)
    let b = Math.min(...num)
    while (true) {
        c = a % b
        if (c == 0) {
            break;
        } else {
            a = b
            b = c
        }
    }
    console.log(b)
    console.log((num[0]*num[1]) / b)
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