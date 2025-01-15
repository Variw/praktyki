/**
 * 1. Worker Threads – Wielowątkowość w Node.js
 * 2. Node.js Cluster – Skalowanie Procesów
 * 3. Strumienie (Streams) w Node.js – Efektywne przetwarzanie dużych danych
 * 4. EventEmitter i Reaktywne Programowanie
 * 5. WebSockets i Komunikacja w Czasie Rzeczywistym
 * 6. Kolejkowanie Zadań i Redis Pub/Sub
 * 7. Zaawansowane Techniki Debugowania i Profilowania Node.js
 * 8. Obsługa Błędów i Zarządzanie Procesami
 * 9. Node.js w Architekturze Mikroserwisów
 */

// 1
const { Worker, isMainThread } = require("worker_threads");
if(isMainThread){
    console.log("Main thread");
    new Worker(__filename);
} else {
    console.log("Working thread");
}

//2