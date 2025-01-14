"use strict";
/*
 5: Nowe zadania w ES9
 5.1. Rest/Spread Operator (...) dla obiektów
*/

//5.1
const user = {
    name: "Aga",
    age: 13
};
const userCopy = {...user, country: "Polska"};
console.log(userCopy);