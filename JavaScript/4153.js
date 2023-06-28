function solution(input) {
    for (i = 0; i < input.length-1; i++){
        let input0 = input[i].split(" ").map(Number).sort(function(a, b)  {return a - b;});
        if (input0[0] ** 2 + input0[1] ** 2 == input0[2] ** 2) {
            console.log("right")
        } else {
            console.log("wrong")
        }
    }
}

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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