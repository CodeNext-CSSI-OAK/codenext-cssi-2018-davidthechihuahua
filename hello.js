// Author: david estrada - whomstdve

// console.log('hello there');
// console.log("Hello World!");
// console.log("It's a beautiful day for programming, isn't it?");
// console.log("Hey! What's 1 + 1?");
// console.log("It's " + 1 + 1 + " of course!");
// console.log("No, it's " + (1 + 1) + ", silly goose!");
// console.log("This isn't going to get printed, is it?");
  //  let readline = require('readline-sync');
  //  let reply = readline.question("have you heard the tradgey of darth plaguise the wise? ");
  // console.log('its not a story the jedi would tell you');
let readline = require('readline-sync');
let age = Number(readline.question('what is your age?'));
//let age = asAgeAString = readline.question('what is your age?');
//let age = Number (ageAsAString);
console.log('In 2028 you will be' + (age + 10) + 'years old.');
