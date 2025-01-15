const N = 5;
const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js', {workerData: {num: N}});
worker.on('message', result => {
    console.log(`Fibbonacci number nr. ${N}:`, result);
})
worker.on("error", msg => {
    console.log(msg);
})
console.log('Works?');