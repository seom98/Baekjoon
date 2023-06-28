function solution(input) {
    numbers = input.split(" ").map(element => Number(element));
    let h = 0;
    let m = 45;
    if (1 <= numbers[0]) {
        if (45 <= numbers[1]) {
            h = numbers[0]
            m = numbers[1] - m
        } else {
            h = numbers[0] - 1
            m = numbers[1] - m + 60
        }
    } else {
        if (45 <= numbers[1]) {
            h = 0
            m = numbers[1] - m
        } else {
            h = 23
            m = numbers[1] - m + 60
        }
        
    }
    console.log(`${h} ${m}`)

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