"use strict";
/*
 Nowe funkcje w ES8
 4.1. async/await – nowy sposób obsługi asynchroniczności
 4.2. Object.entries i Object.values – łatwa iteracja po obiektach
*/

//4.1
async function pobierzDane(){
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json);
}

//4.2
const user = {
    name: "Aga",
    age: 13
};
console.log(Object.entries(user));
console.log(Object.values(user));