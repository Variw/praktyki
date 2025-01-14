"use strict";
/*

*/


const obj = {name: "Liczba", x: 42, y: 12};
let key = "";
let descriptor;

for(let i = 0; i < Object.keys(obj).length; i++){
        key = Object.keys(obj).at(i);
    descriptor = Object.getOwnPropertyDescriptor(obj, key);
    descriptor.toString = function ()  {
        return `{\n   configurable: ${this.configurable},\n   enumerable: ${this.enumerable},\n   writable: ${this.writable},\n   value: ${this.value}\n}`;
    }

    console.log(`Key: ${key}\nDescription: ${descriptor}\n`);
}
