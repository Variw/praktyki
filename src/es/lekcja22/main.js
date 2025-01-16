/**
 * Zaawansowane Techniki Debugowania i Profilowania Node.js
 * Obsługa Błędów i Zarządzanie Procesami
 */
console.time("Execution time");
setTimeout( () => console.timeEnd("Execution time"), 1000);
process.on("uncaughtException", err => {
    console.error("Critical Error: ", err);
    process.exit(1);
});
