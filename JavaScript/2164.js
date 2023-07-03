function solution(input) {
    // const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    let num = Number(input);
    if (num == 1) {
        console.log(1)
    } else if (num == 2) {
        console.log(2)
    } else {
        let i = 1
        while (true) {
            if (2 ** i < num && num <= 2 ** (i+1)) {
                num = num - (2 ** i)
                num = num * 2
                console.log(num)
                break;
            }
            else {
                i++
            }
        }
    }
}

const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.on("line", (line)=>{
    input=line
    rl.close()
}).on("close", ()=> {
    solution(input)
    process.exit()
})