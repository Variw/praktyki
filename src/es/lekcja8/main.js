"use strict";
/*
 Nowe zadania w ES12
 8.1. String.prototype.replaceAll()
 8.2. Logical Assignment Operators (&&=, ||=, ??=)
*/

//8.1
console.log("Ala ma kota i ma psa".replaceAll("ma", "nie ma"));

//8.2
let x = 5;
x ||= 10;
console.log(x);
x &&= 0;
console.log(x);
x ||= 10;
console.log(x);
