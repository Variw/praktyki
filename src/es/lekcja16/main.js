/*
  async/await – Ułatwienie dla Promise
    16.1. Podstawy async/await
    16.2. await do obsługi promes
    16.3. Obsługa błędów w async/await
*/

//16.1
async function pobierzDane(){
    return "Dane załadowane";
}
pobierzDane().then(console.log);

//16.2
async function asyncExample() {
    console.log("Pobieranie danych...");
    const result = await new Promise(resolve => setTimeout( () => resolve("Dane pobrane"), 2000));
    console.log(result);
}
void asyncExample();

//16.3
async function fetchData(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Błąd: ", error);
    }
}
void fetchData();