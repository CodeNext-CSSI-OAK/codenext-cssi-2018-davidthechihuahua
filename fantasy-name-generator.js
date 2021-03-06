// Author: FirstName LastName
let readline = require("readline-sync");

// global variables
let firstName, lastName, favoriteFruit, cityBorn, favSong, nameOfPlanet, fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
return firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
return favoriteFruit.substring(0,2) + cityBorn.substring(0,3 ).toLowerCase();
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
let thirdToLast = lastName.charAt(lastName.length - 3);
let secondToLast = lastName.charAt(lastName.length - 2);
let last = lastName.charAt(lastName.length - 1);
return last + secondToLast + thirdToLast + favSong.substring(" ").toLowerCase();
}



/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the nameOfPlanet they live on.
*******************************************************************************/

function getHonorific() {
return nameOfPlanet + " of " + getTitle();
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
firstName = readline.question("What is your first name boi?");
lastName = readline.question("What is your last name?");
favoriteFruit = readline.question("What is your favourite fruit?");
cityBorn = readline.question("What city do you live in?");
favSong = readline.question("What is your favorite song?");
nameOfPlanet = readline.question("Name a planet?");

//the cowbell is the most majestic intrument
console.log(getNewFirstName() + " " + getNewLastName() + ", " + getHonorific());
}

// Run the program!
run();
