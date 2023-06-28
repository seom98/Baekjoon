function solution(input) {
    numbers = input.split(" ").map(element => Number(element));
    if (numbers[0]< numbers[1]) {
        console.log("<");
    } else if (numbers[0] > numbers[1]) {
        console.log(">");
    } else {console.log("==");
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