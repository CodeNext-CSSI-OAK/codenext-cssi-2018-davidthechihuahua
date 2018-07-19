let readline = require("readline-sync");


let correctPassword = "hellothere";
let input = "";
let attempts = 3;

while(input !== correctPassword && attempts > 0){
  input = readline.question("password citizen!")
  attempts--;
}
if (input === correctPassword){
  console.log ("You may pass into the city. *bzzt*")
}else{
  console.log("uhhh...that doesnt compute... You are under arrest!")
  console.log("|  .-.")
console.log("  ||/__'`.")
  console.log("|//()'-.:")
  console.log("|-.||")
  console.log("|o(o)")
  console.log("|||\\\  .==._")
  console.log("|||(o)==::'")
   console.log("`|T  **")
    console.log("()")
    console.log("|\\")
    console.log("||\\")
    console.log("()()")
    console.log("||//")
    console.log("|//")
console.log("l42.'=`=.")
}

let readline = require("readline-sync");

for(let count = 0; count <= 30; count++){
  console.log(count);
}
function reverseString(str){
  let reversed = " ";
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str.length.charAt(i);

  }
  return reversed;
}

let helloThere = 5
while(helloThere > 0){
  console.log("hello there");
  console.log("general kenobi! you're a bold one!")
  helloThere --;
}


  let str = "ABCDE";
  for(let i = 0; i < str.length; i++){
  console.log(str.charAt(i));

  }
