"use strict";

const memoryUsageBefore = process.memoryUsage();

const numbers = [2, 3, 5, 7, 11, 13, 17];
for(const i of numbers){
    console.log(i);
}
class obj {
   constructor(number) {
       this.number = number;
   }
}
let tab = [];
for(let i = 0; i < 10; i++){
    tab.push(new Array((1e7)));
}

const memoryUsageAfter = process.memoryUsage();
let t = [];
console.log(memoryUsageBefore.heapTotal);
console.log(memoryUsageAfter.heapTotal - memoryUsageBefore.heapTotal);
console.log((memoryUsageAfter.heapTotal - memoryUsageBefore.heapTotal).toString().length)
