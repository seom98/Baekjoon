function solution(input) {
    let string = input.toUpperCase().split("")
    let counter = {};
    let max = 0
    let count = 0
    for (let name of string) {
        if (name in counter) {
            counter[name] += 1;
        } else {
            counter[name] = 1;
        }
    }
    // let max = Math.max(...Object.values(counter))

    for (let M in counter) {
        if (counter[M] > max) {
            max = counter[M]
        } 
    }

    for (let M in counter) {
        if (counter[M] == max) {
            count += 1
        }
    }

    if (count > 1) {
        console.log("?")
    } else {
        for (let M in counter) {
            if (counter[M] == max) {
                console.log(M)
            }
        }
    }
};

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) => {
    input = line
    rl.close()
}).on("close", () => {
    solution(input)
    process.exit()
})