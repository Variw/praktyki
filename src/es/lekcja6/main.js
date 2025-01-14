"use stict";
/*
  Nowe zadania w ES10
  6.1. Array.prototype.flat() – spłaszczanie tablic
  6.2. Object.fromEntries() – tworzenie obiektu z tablicy
*/

//6.1
const t = [[1,2],[3,4]];
console.log(t.flat(1));

//6.2
const entries = [["name", "Jan"], ["age", 30]];
console.log(Object.fromEntries(entries));