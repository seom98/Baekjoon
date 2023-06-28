function solution(input) {
    let input1 = Number(input[0]);
    let input2 = input[1].split(" ").map(element => Number(element));

    let M = Math.max(...input2)

    let total = 0
    for(let i=0; i<input1; i++) {
        total += input2[i]/M*100
    }

	console.log(total/input1)
}

const readline = require("readline") 

const rl = readline.createInterface({
  input : process.stdin, 
  output : process.stdout 
})

let input = [] 

rl.on("line", (line) => { 
  if (!line) { 
    rl.close() 
  } else { 
    input.push(line) 
  }
}).on("close", () => { 
  solution(input) 
  process.exit() 
})