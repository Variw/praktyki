"use strict";

console.log("Downloading data...");
async function downloadData(index = 1){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${index}`);
        return await response.json();
    } catch (error){
        console.log("ERROR: ", error);
    }
}
const N = 99;
let allData = []
for(let i = 1; i <= N; i++){
    console.clear()
    console.log(`${(i-1/N * 100).toPrecision(3)}%`);
    const data = await downloadData(i);
    allData.push(data);
}
console.clear()
console.log("Data downloaded successfully");
setTimeout( () => console.log(allData), 2000);

