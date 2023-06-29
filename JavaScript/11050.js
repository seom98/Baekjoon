function solution(input) {
    let arr = Array.from(Array(11), () => new Array(11))
    arr[0].fill(1)
    for (let i = 0; i < 11; i++) {
        arr[i][0] = 1
    }
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
    }
    let input0 = input.split(" ").map(Number)
    let n = Number(input0[0])
    let k = Number(input0[1])

    console.log(arr[k][n-k])

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