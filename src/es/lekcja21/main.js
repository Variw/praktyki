/**
 * EventEmitter i Reaktywne Programowanie
 * Jak działa events.EventEmitter?
 * Praktyczne zastosowania EventEmittera w architekturze aplikacji.
 */

const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("event", () => console.log("Event"));
myEmitter.emit("event");