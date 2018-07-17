// let readline = require("readline-sync");
//
//
// let correctPassword = "hellothere";
// let input = "";
// let attempts = 3;
// while(input !== correctPassword && attempts > 0){
//   input = readline.question("password citizen!")
//   attempts--;
// }
// if (input === correctPassword){
//   console.log ("You may pass into the city. *bzzt*")
// }else{
//   console.log("uhhh...that doesnt compute... You are under arrest!")
//   console.log("|  .-.")
// console.log("  ||/__'`.")
//   console.log("|//()'-.:")
//   console.log("|-.||")
//   console.log("|o(o)")
//   console.log("|||\\\  .==._")
//   console.log("|||(o)==::'")
//    console.log("`|T  **")
//     console.log("()")
//     console.log("|\\")
//     console.log("||\\")
//     console.log("()()")
//     console.log("||//")
//     console.log("|//")
// console.log("l42.'=`=.")
// }

// let readline = require("readline-sync");
//
// for(let count = 0; count <= 30; count++){
//   console.log(count);
// }
function reverseString(str){
  let reversed = " ";
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str.length.charAt(i);

  }
  return reversed;
}
console.log(reversedString("banana"));
console.log(reversedString("squid"));
console.log(reversedString("ur mum"));
console.log(reversedString("but"));
