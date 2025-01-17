type Cat =  {meow: true};
type Dog = {bark: true};
type Wolf = {bark: true, howl: true}
type Cow = {moo: true}
type WeirdCat = {meow: true, bark: true, moo: true}

type ExtractBarking<isDog> = isDog extends {bark:true} ? isDog : never;
type Animal =  Cat | Dog | Wolf | Cow | WeirdCat;
type Barking = ExtractBarking<Animal>; //Initial type: Dog | Wolf | WeirdCat

const cat : Cat = {meow: true};
let barking : Barking;
//barking = cat; Type 'Cat' is not assignable to type 'Barking'