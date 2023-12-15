import fs from 'fs'

const input = fs.readFileSync('./input.txt').toString();


// function partOne() {
//   let total = 0
//   for (let game of input.split('\n')) {
//     let [gameId, gameData] = game.split(': ')
//     let valid = true

//     for (let gameSet of gameData.split('; ')) {
//       let cubeCounts = {
//         red: 12,
//         green: 13,
//         blue: 14
//       }

//       for (let cube of gameSet.split(', ')) {
//         let [count, color] = cube.split(' ')
//         cubeCounts[color] -= parseInt(count)

//         for (let key of Object.keys(cubeCounts)) {
//           if (cubeCounts[key] < 0) {
//             valid = false
//             break
//           }
//         }
//       }
//     }
//     if (valid) {
//       total += parseInt(gameId.split(' ')[1])
//     }
//   }
//   return total
// }


function partTwo() {
  let total = 0
  for (let game of input.split('\n')) {
    let [gameId, gameData] = game.split(': ')

    let globalCounts = {
      red: 0,
      green: 0,
      blue: 0
    }
    for (let gameSet of gameData.split('; ')) {

      let localCounts = {
        red: 0,
        green: 0,
        blue: 0
      }

      for (let cube of gameSet.split(', ')) {
        let [count, color] = cube.split(' ')
        localCounts[color] += parseInt(count)

        for (let key of Object.keys(localCounts)) {
          if (localCounts[key] > globalCounts[key]) {
            globalCounts[key] = localCounts[key]
          }
        }
      }
    }
    total += globalCounts.red * globalCounts.green * globalCounts.blue
  }
  return total

}

console.log(partTwo())