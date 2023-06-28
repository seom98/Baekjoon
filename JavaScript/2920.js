function solution(input) {
    let ascending = "1 2 3 4 5 6 7 8"
    let descending = "8 7 6 5 4 3 2 1"

    if (input == ascending) {
        console.log("ascending")
    } else if (input == descending) {
        console.log("descending")
    } else {
        console.log("mixed")
    }
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