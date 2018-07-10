// Author: david estrada
console.log("_____________________________hello_there______________");
  let readline = require('readline-sync');
  let cents = readline.question("hello there");

  let quarters = Math.floor(cents / 25);
  let a = Math.floor(cents % 25);
  console.log("quarters: " + quarters);

  let dimes = Math.floor(cents / 10);
  let b = Math.floor(cents % 10);
  console.log("dimes: " + dimes);

  let pennies = Math.floor(cents / 1);
  let c = Math.floor(cents % 1);
  console.log("pennies: " + pennies);

  let nickles = Math.floor(cents / 5);
  let d = Math.floor(cents % 5);
  console.log("nickles: " + nickles);

  //let centsAsANumber = Number(centsAsAString);



console.log("_____________________________General_Kenobi______________");
// let centsAsAString = "123";
// let centsAsANumber = Number(centsAsAString);
// let cents = totalChange;
// let totalChange = userInput;
// let quarters = Math.floor(cents / 25);
// let dimes = Math.floor(cents / 10);
// let pennies = Math.floor(cents / 1);
// let nickles = Math.floor(cents / 5);
// let totalChange = (quarter + dimes + pennies + nickles);
// let readline = require('readline-sync');
// console.log("you change is ");
