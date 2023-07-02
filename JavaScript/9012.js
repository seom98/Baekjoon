function solution(input) {
    let num = Number(input[0])
    for (let i = 1; i <= num; i++) {
        let n = 0
        let m = 0
        let ans = input[i].split("")
        for (let j = 0; j < ans.length; j++) {
            if (ans[j] == "(") {
                n++
            } else {
                m++
            }
            if (n-m < 0) {
                break;
            }
        }
        if (n-m == 0) {
            console.log("YES")
        } else {
            console.log("NO")
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