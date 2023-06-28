function solution(input) {
    let apb = "abcdefghijklmnopqrstuvwxyz"
    let apbArr = apb.split("")
    let input0 = input.split("")
    let arr = new Array(26).fill(-1)

    for (let i = 0; i < apbArr.length; i++) {
        for (let j = 0; j < input0.length; j++) {
            if (apbArr[i] == input0[j]) {
                if (arr[i] !== -1) {
                    continue
                } else {
                    arr[i] = j
                }
            } 
        }
    }
    console.log(arr.join(" "))
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