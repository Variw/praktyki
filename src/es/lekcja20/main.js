/**
 * Strumienie (Streams) w Node.js – Efektywne przetwarzanie dużych danych
 * Dlaczego fs.createReadStream() jest lepsze od fs.readFile()?
 * Pipes (.pipe()) – jak przesyłać dane między strumieniami?
 * Backpressure – jak unikać przeciążenia strumieni?
 */

const fs = require("fs");
fs.createReadStream("duzy-plik.txt")
    .pipe(fs.createWriteStream("kopiowany-plik.txt"))
    .on("finish", () => console.log("Kopiowanie zkończone"));



