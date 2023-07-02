function solution(input) {
    input.shift()
    let ans = input.map(Number).sort((a,b) => a-b)
    console.log(ans.join(`\n`))
}
    // for(i = 0; i < input[0]; i++) {
    //     if (i == +input[0]-1) {
    //         ans += `${input[input[0]-i]}`
    //     } else {
    //         ans += `${input[input[0]-i]}\n`
    //     }
    // }
    // console.log(ans)

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