"use strict";
/*
 Funkcje z ESNext
 10.1. Array.prototype.toSorted() – nie modyfikuje oryginalnej tablicy
*/

//10.1
const numbers = [2, 4, 1, 8, 3];
console.log(numbers.toSorted());
console.log(numbers);