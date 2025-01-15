/*
 Event Loop – Jak JavaScript zarządza zadaniami?
 JavaScript posiada kolejkę zadań i kolejkę mikrotasków.
 Mikrotaski (Promise.then()) są wykonywane przed makrotaskami (setTimeout()).
*/

console.log("Start");
setTimeout( () => console.log("setTimeout"), 0);
Promise.resolve().then( () => console.log("Promise"));
console.log("Koniec");