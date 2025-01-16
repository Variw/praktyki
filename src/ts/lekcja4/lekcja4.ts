
async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await response.json();
}
getData().then(data => console.log(data));
//type post = [number, number, string, string];
