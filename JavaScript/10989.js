const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = new Array(10001).fill(0)
let ans = ""

rl.on("line", (line) => {
    if (!line) {
        rl.close()
    } else {
        arr[line]++
    }
}).on("close", () => {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] == 0) {
            continue
        } else {
            for (let j = 0; j < arr[i]; j++) {
                ans += `${i} \n`
            }
        }
    }
    console.log(ans)
    process.exit()
})