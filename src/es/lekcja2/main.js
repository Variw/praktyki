"use strict";
/*
 ES6 wprowadził ogromne zmiany, m.in. klasy, let i const,
 zadania strzałkowe, destrukturyzację i moduły.
 2.1. let i const – nowe sposoby deklaracji zmiennych
 2.2. Szablony stringów (Template Literals)
 2.3. Funkcje strzałkowe (Arrow Functions)
 2.4. Destrukturyzacja (Destructuring)
 2.5. Moduły ES6 (import/export)
*/

//2.1
let zmienna = 5;
const STALA = 13;
console.log(`Zmiena: ${zmienna}, stała: ${STALA}`);
//2.2
const name_ = "Janek";
console.log(`Witaj, ${name_}!`);

//2.3
const suma = (a,b) => a+b;
console.log(suma(2,3));

//2.4
const user = {
    name: "Adam",
    age: 25
};
const { name,age } = user;
console.log(name,age);

//2.5
import {zmienna_} from "./plik.js";
console.log(zmienna_);
