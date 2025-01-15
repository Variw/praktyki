/*
 JavaScript działa na jednowątkowym modelu opartym na Event Loop,
  ale potrafi obsługiwać operacje asynchroniczne, takie jak timery,
  żądania HTTP, czy interakcje z bazami danych.

    13.1. setTimeout – Wykonanie po określonym czasie
    13.2. setInterval – Powtarzanie operacji
*/

//13.1
console.log("Start");
setTimeout(() => {
    console.log("Wypisany tekst po 2 sek.");
}, 2000);
console.log("Koniec");

//13.2
let counter = 0;
const interval = setInterval(() => {
    counter++;
    console.log(`iteracja: ${counter}`);
    if(counter === 5) clearInterval(interval);
}, 1000);