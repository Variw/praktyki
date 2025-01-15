
const osoba = {
    imie: "Marek",
    przywitajZaSekunde: function(){
        setTimeout(() =>
            console.log(`Cześć jestem ${this.imie}`)
        ,1000);
    },
};
osoba.przywitajZaSekunde();

const numbers = [1, 2, 5, 3, 10, 4];
const doubled = numbers.map(num => num*2);
const even = numbers.filter(foo => foo % 2 === 0);
const reduced = numbers.reduce((acu, val) => acu + val, 0);
console.log(doubled);
console.log(even);
console.log(reduced);

(() => {
    console.log("Funkcja IIFE");
})();

function fun(a,b,c=5){
    console.log(arguments);
}
fun(1,2);


let s = "1234";
const len = s => s.length;
console.log(len(s));

const rev = s => {
    let revs = "";
    for(let i = s.length-1; i >= 0; i--){
        revs += s[i];
    }
    return revs;
};
console.log(rev(s));

const eve = n =>  n % 2 === 0 ? "Even" : "Odd";
const number = 3;
console.log(eve(number));
