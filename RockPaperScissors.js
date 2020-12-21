// JavaScript Rock/Paper/Scissors exercise
// twitter.com/joe_hinkle
// github.com/joehinkle

/**
 * Coded by EdgyCoder for joehinkle
 * https://twitter.com/edgycoder
 * This could be a better option to do a RPS simulator!
 */

const options = ['rock', 'paper', 'scissors']
const args = prompt(`You have to use one of these options: [${options.join(', ')}]: `, 'rock')
const computerPick = options[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
const userPick = args.toLowerCase()

let state
switch (userPick) {
  case computerPick: state = "DRAW"; break
  case options[0]: state = computerPick == options[2] ? "YOU WON" : "YOU LOST"; break
  case options[1]: state = computerPick == options[0] ? "YOU WON" : "YOU LOST"; break
  case options[2]: state = computerPick == options[1] ? "YOU WON" : "YOU LOST"; break
}

console.log(`You choose ${userPick} and the computer choose ${computerPick} .. ${state}!`)
