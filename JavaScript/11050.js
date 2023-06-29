function solution(input) {
    let input0 = input.split(" ").map(Number)
    let n = Number(input0[0])
    let k = Number(input0[1])
    if (n/2 < k) {
      k = n-k
    }
    let a = 1
    let b = 1
    for (let i = 1; i <= k; i++) {
      a *= n-i+1
      b *= i
    }
    console.log(a/b)

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