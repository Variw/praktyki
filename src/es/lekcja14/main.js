/*
 Callbacki to funkcje przekazywane jako argumenty do
 innych funkcji i wywoływane po zakończeniu operacji.
    14.1. Przykład z setTimeout
    14.2. Problem callback hell (piekło callbacków)
        Gdy callbacki są zagnieżdżone,
        kod staje się trudny do utrzymania.
*/

//14.1
function sayHello(callback){
    setTimeout(() => {
        console.log("Hi!")
        callback();
    }, 1000)
}
sayHello(() => console.log("Message after function"));

//14.2
setTimeout(() => {
    console.log("Operacja 1");
    setTimeout( () => {
        console.log("Operacja 2");
        setTimeout( () => {
            console.log("Operacja 3")
        }, 1000);
    }, 1000);
}, 1000);