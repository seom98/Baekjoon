function solution(input) {
    let num = Number(input);
    let i = 1
    let total = 1
    while (true) {
        if (num <= total) {
            console.log(i)
            break;
        } else {
            total += i * 6
            i++
        }
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