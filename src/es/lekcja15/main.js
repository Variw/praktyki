/*
 Promise pozwala na czytelniejsze
 zarządzanie operacjami asynchronicznymi.
    15.1. Tworzenie obietnicy (Promise)
    15.2. Promise.all() – Uruchamianie wielu operacji równolegle
*/

//15.1
const asyncOeration = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        success ? resolve("SUKCES!") : reject("BLAD!");
    }, 2000);
});

asyncOeration
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally( () => console.log("Koniec operacji"));

//15.2
const p1 = new Promise(resolve => setTimeout( () => resolve("P1 gotowy"), 2000));
const p2 = new Promise(resolve => setTimeout( () => resolve("P2 gotowy"), 1000));

Promise.all([p1, p2]).then(console.log);