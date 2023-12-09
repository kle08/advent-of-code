import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString();
let total = 0;

const numMapping = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
}

for (let l of input.split('\n')) {

  for (let num of Object.keys(numMapping)) {
    l = l.replaceAll(num, numMapping[num])
  }

  const num = l.split('').filter(ele => !isNaN(parseInt(ele)));
  total += parseInt(`${num[0]}${num[num.length - 1]}`);
}

console.log(total)
