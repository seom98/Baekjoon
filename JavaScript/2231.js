function solution(input) {
    let input0 = input.split("").map(Number);
    let num = 0
    let ans = []
    for (let i = 1; i <= 7; i++) {
        if (input0.length == i) {
            num += i*9
            let count = 0
            for (let j = 0; j <= num; j++) {
                let x = String(input - j)
                let x0 = x.split("").map(Number);
                let y = 0
                for (let k = 0; k < x0.length; k++) {
                    y += x0[k]
                }
                if (y == j) {
                    ans.push(x)
                } else if (y !== j) (
                    count++
                )
                if (count == num+1) {
                    console.log(0)
                }
            }
        }
    }
    if (ans.length > 0) {
        console.log(ans[ans.length-1])
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