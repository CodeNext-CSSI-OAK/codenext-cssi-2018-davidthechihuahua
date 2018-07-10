// Author: david estrada

let y = 1898;
console.log("y = " + y);

let a = y%19;
console.log("the value of a is " + a);

let b = Math.floor(y/100);
console.log("b is " + b);

let c = (y%100);
console.log("c is " + c);

let d = Math.floor(b/4);
console.log("d is " + d);

let e = b%4;
console.log("e is " + e);

let f = (b+8)/25;
console.log("f is " + f);

let g = Math.floor((b-f+1)/3);
console.log("g is " + g);

let h = ((19 * a + b - d - g + 15) %30);
console.log(h);

let i = Math.floor(c/4);
console.log("i is " + i);

let k = c%4;
console.log("k is " + k);

let r = ((32 + 2 * e + 2 * i - h - k) % 7);
console.log("r is " + r);

let m = Math.floor(((a + 11 * h + 22 * r)%451));
console.log("m is " + m);

let n = Math.floor(((h + r - 7 * m + 114)/31));
console.log("n is " + n);

let p = h + ((r - 7 * m + 114)%31);
console.log("p is " + p);

console.log("the day with the egg-laying bunny is " + p + )


let yearAsAString = "123";
let yearAsANumber = Number(centsAsAString);
