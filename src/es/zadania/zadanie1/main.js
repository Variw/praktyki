"use strict";
/*

*/


const obj = {name: "Liczba", x: 42, y: 12};
let key = "";
let descriptor;

for(let i = 0; i < Object.keys(obj).length; i++){
        key = Object.keys(obj).at(i);
    descriptor = Object.getOwnPropertyDescriptor(obj, key);
    descriptor.toString = () =>
        `{\n   configurable: ${descriptor.configurable},\n   enumerable: ${descriptor.enumerable},\n   writable: ${descriptor.writable},\n   value: ${descriptor.value}\n}`;
    console.log(`Key: ${key}\nDescription: ${descriptor}\n`);
}
