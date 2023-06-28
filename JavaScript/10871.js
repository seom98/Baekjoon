function solution(input) {
    let input0 = input[0].split(" ").map(element => Number(element));
    let input1 = input[1].split(" ").map(element => Number(element));

    let list = ""
    for (element of input1) {
        if (element < input0[1]) {
            if (list == "") {
                list += `${element}`
            } else {
                list += ` ${element}`
            }
        }
    }
    
    console.log(list)
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