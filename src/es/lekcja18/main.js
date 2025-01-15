/*
 Wprowadzenie – Jak działa Node.js?
 Node.js jest jednowątkowy, ale obsługuje operacje
 asynchroniczne dzięki Event Loop, który zarządza:
    1. Kodem synchronicznym (wykonywanym natychmiast).
    2. Operacjami asynchronicznymi (np. setTimeout, operacje I/O, Promise).
    3. Kolejkami makrotasków i mikrotasków.
 Główne składowe Event Loop:
 Call Stack (Stos wywołań)
 Web APIs / Libuv (Obsługuje operacje I/O, setTimeout, fs.readFile)
 Task Queue (Makrotaski: setTimeout, setImmediate, operacje I/O)
 Microtask Queue (Mikrotaski: Promise.then(), process.nextTick())

 2. Kolejność Wykonywania Kodów w Event Loop
 Event Loop działa w następujących fazach:
    1. Timers (obsługuje setTimeout i setInterval).
    2. Pending Callbacks (wywołuje opóźnione callbacki z operacji I/O).
    3. Idle, Prepare (używane wewnętrznie przez silnik V8).
    4. Poll (obsługuje operacje I/O np. fs.readFile).
    5. Check (obsługuje setImmediate).
    6. Close Callbacks (np. socket.on('close', ...)).
    7. Microtasks (wykonywane po każdej fazie).
*/

//Zadanie 1
console.log("1. Kod synchroniczny");
setTimeout( () => console.log("2. setTimeout"), 0)
Promise.resolve().then( () => console.log("3. Promise"));
process.nextTick( () => console.log("4. process.nextTick"));
console.log("5. Kolejna instrukcja");



