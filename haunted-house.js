// Author: david estrada
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          Meme review");
console.log("                 A game by DAVID  ESTRADA");
console.log("*****************************************************************");
console.log("You are a person who enjoys memes and you want to review them.");
console.log("You see your the Monkey Hair Cut Monkey meme and see that it is quite unique. You can review it and give it a positive or negative score. ");
var reviewMeme = readline.question("Will you review it with a positive score? (yes or no) ");
if(reviewMeme == "y" || reviewMeme == "yes") {
  // your code here
console.log("The site you reviewed it on agrees with you.")
} else {
  // your code here
  if(reviewMeme == "n" || reviewMeme == "no") {
    // your code here
  console.log("The site you reviewed it on dis  agrees with you.")
  }
}
console.log("");
