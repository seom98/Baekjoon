//txt 파일 만들어서 입출력 받는 방법
// var fs = require("fs")

// var input = fs
//   .readFileSync("./test.txt")
//   .toString()
//   .split(" ")

//   console.log(input)



//안만들고 입출력 받는 방법(1줄짜리)
function solution(input) {
  console.log(input)
  for (let i=0; i<input.length; i++) {
    let numbers = input[i].split(" ").map(element => Number(element))
    console.log(numbers)
    let answer = 0
    for( let i =0; i < numbers.length; i ++) {
      answer += numbers[i]
    }
    console.log(answer)
    // console.log(numbers[0]+numbers[1])
  }
    // let numbers = input.split(" ").map(element => Number(element))
    // console.log(numbers[0]+numbers[1])
}

const readline = require("readline") // readline 모듈 불러오기
const rl = readline.createInterface({ // 인터페이스 생성
  input: process.stdin, // 표준 입력 스트림 사용
  output: process.stdout // 표준 출력 스트림 사용
})

// 2줄이상 입력받을때
let input = []
rl.on("line", (line)=> {
  if(!line) {
    rl.close()
  } else {
    input.push(line)
  }
}).on("close", ()=> {
  solution(input)
  process.exit()
})