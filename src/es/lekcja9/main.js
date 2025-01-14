"use strict";
/*
  Nowe zadania w ES13 i nowsze
  9.1. Array.prototype.at()
  9.2. Object.hasOwn() – zamiast hasOwnProperty
*/

//9.1
const numbers = [1, 5, 10, 8, 12, 6];
console.log(numbers.at(3));
console.log(numbers.at(-1));

//9.2
const obj = {name: "Jan"};
console.log(Object.hasOwn(obj, "name"));

