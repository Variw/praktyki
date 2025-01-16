const dataString = `{ "name" : "Aby" }`;
const jsonParser = (stringToParse: string) => JSON.parse(stringToParse);
const myData = jsonParser(dataString);
console.log(myData.name);
console.log(myData.mail);

type User = { name: string };
const jsonParserBetter = (stringToParse: string) : unknown => JSON.parse(stringToParse);
const myNewData = jsonParserBetter(dataString) as User;
console.log(myNewData.name);
//console.log(myNewData.mail);