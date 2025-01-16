/**
 * @type {import('node:cluster')}
 * Worker Threads – Wielowątkowość w Node.js
 * Node.js Cluster – Skalowanie Procesów
 */


const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

if(cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    console.log(numCPUs);
    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`)
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Handled by process ${process.pid}`)
    }).listen(8000);
    console.log(`Worker ${process.pid} started`);
}