import * as readline from "node:readline";

async function getData(n : number){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${n}`);
    return  response.json();
}

function Question(array : any[]) : boolean {
    rl.question("Input: ", input => {
        if(input === "exit") rl.close();
        else{
            const intId : number = Number.parseInt(input);
            if(!Number.isNaN(intId)){
                if(intId > N)
                    console.log("Out of bonds");
                else
                    console.log(array[intId]);
            }
            else
                console.log(`${input} is not a number`);
            Question(array);
        }
    });
    return true
}
type Post = {
    userId: number,
    id : number,
    title : string
    body : string
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const N = 50;
function Main() : number{
    const promises : any[] = [];
    for (let i = 0; i < N; i++){
        promises[i] = getData(i).then((data) : Post => data)
        console.clear()
        console.log((i/N*100).toPrecision(3) + "%")
    }
    console.clear();
    console.log('Download completed successfully');
    Promise.all(promises).then((postData:Post[]) => {
        console.clear();
        console.log("Select Id or type 'exit' to leave");
        Question(postData);
    });
    return  0;
}
Main();

