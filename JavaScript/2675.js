function solution(input) {
    let input0 = Number(input[0]);
    let result = ""
    for (let i = 1; i <= input0; i++) {
        let arr = input[i].split(" ");
        let arr0 = Number(arr[0]);
        let arr1 = arr[1].split("")
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 1; k <= arr0; k++) {
                result += `${arr1[j]}`
            }
        }
        if (i < input0) {result += `\n`}
    }
    console.log(result)
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