// Author: FirstName LastName
// Author: david estrada

let readline = require('readline-sync');
let year = Number(readline.question('what day in the year is the egg-laying easter bunny coming? whomstve knows? Me. So ask Me! enter a year above 1582'));

let y = year;
let a = y%19;
let b = Math.floor(y/100);
let c = (y%100);
let d = Math.floor(b/4);
let e = b%4;
let f = (b+8)/25;
let g = Math.floor((b-f+1)/3);
let h = ((19 * a + b - d - g + 15) %30);
let i = Math.floor(c/4);
let k = c%4;
let r = ((32 + 2 * e + 2 * i - h - k) % 7);
let m = Math.floor(((a + 11 * h + 22 * r)%451));
let n = Math.floor(((h + r - 7 * m + 114)/31));
let p = h + ((r - 7 * m + 114)%31);
console.log("the day with the egg-laying bunny is " + n + p);
