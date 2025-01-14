"use strict";
/*
  Nowe funkcje w ES11
  7.1. Nullish Coalescing Operator (??)
  7.2. Optional Chaining (?.)
*/

//7.1
let user = null;
console.log(user ?? "NUll");

//7.2
const obj = { user: {name: "Jan"}};
console.log(obj.user?.name);
console.log(obj.admin?.age);

