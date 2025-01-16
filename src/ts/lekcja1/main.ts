function retString( arg : string | string[] | ( () => string) | {s: string}): string {
    if(typeof arg === "string") return arg;
    else if (Array.isArray(arg)) return  arg.map(arg => arg).join('');
    else if (typeof arg === "function") return arg();
    else return arg.s;
}
let s1 = ["C", "C", "C"];
let s2 = {s : "DDD"};
console.log(retString("AAA"));
console.log(retString(() => "BBB"));
console.log(retString(s1));
console.log(retString(s2));
