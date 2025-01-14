//odkomentuj "use strict" aby kod niezadziałał przez  podpunkt 1.1
//"use strict";
/*
ES5 wprowadził kilka kluczowych usprawnień,
szczególnie w zakresie metod pracy z tablicami oraz obsługi właściwości obiektów
1.1. strict mode – tryb ścisły
Zapewnia lepszą kontrolę nad kodem i eliminuje niektóre błędy.
1.2. Nowe metody dla tablic
1.3. Object.defineProperty – kontrola nad właściwościami obiektu
 */
//1.1
x = 5;

//1.2
const liczby = [1, 2, 3, 4, 5];
console.log(liczby.map(x => x*2));
console.log(liczby.filter(x => x > 2));
console.log(liczby.reduce((sum, x) => sum + x, 0));

//1.3
const obj = {};
Object.defineProperty(obj, "x", {
    value: 42,
    writable: false,
    enumerable: false
});
console.log(obj.x);