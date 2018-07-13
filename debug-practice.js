// let x = 10;
// let y = x - 4;
// let z = x - y + 1;
// x *= 3;
// y = ++z;
// let num1 = 7;
// num1 *= 3;

// let num2 = num1--;
// ++num2;
// console.log(num1);
// console.log(num2);

// let readline = require("readline-sync");
// let ourNum = 5;
// let userNum = Number(readline.question("Please guess a number from 1 to 10: "));
// if (userNum === ourNum) {
//   console.log("You guessed it! Lucky!");
// } else if (userNum < ourNum){
//   console.log("Sorry, your guess is too low!");
//   if (userNum - ourNum >= -3 && userNum - ourNum <= 3) {
//     console.log("You're warm! Try again!");
//   } else {
//     console.log("You're cold! Try again!");
//   }
// } else {
//   console.log("Sorry, your guess is too high!");
//   if (userNum - ourNum >= -3 && userNum - ourNum <= 3) {
//     console.log("You're warm! Try again!");
//   } else {
//     console.log("You're cold! Try again!");
//   }
// }
function subtract(num1 = 2, num2 = 0){
  return (num1 - num2);
}
let result = subtract(6,4);
console.log('the result is: + result')

function absoluteDifference(num1, num2){
  if (num1 > num2){
    return num1 - num2;
  }
    return num1 - num2;

}
