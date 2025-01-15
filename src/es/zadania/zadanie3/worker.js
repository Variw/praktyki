
const {parentPort, workerData} = require('worker_threads');
parentPort.postMessage(fib(workerData.num));

function fib(n){
    let output = 1;
    let lastNumber = 0;
    let store = 0;
    for(let i = 0; i < n; i++){
        store = output;
        output += lastNumber;
        lastNumber = store;
    }
    return output;
}