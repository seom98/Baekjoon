function solution(input) {
    let strings = input.split(" ")

    let count = 0
    for (let i=0; i<strings.length; i++) {
        if (strings[i] !== '') {
            count++
        }
    }
    console.log(count)
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