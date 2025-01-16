interface error {
    error : { message: string}
}
interface humanBeing {
    name : string
    age : number
    description : string
}
type messageError = error & humanBeing;

const ErrorHandler = (trouble: messageError)=> {
    if(trouble.error){
        console.error("ERROR:", trouble.error.message)
    }
    console.log("Send by: " +  trouble.name);
}

const mansTrouble : messageError = {
    error: {
        "message": "Me trouble have",
    },
    name: "Jef",
    age: 83,
    description: "Old man"
};

ErrorHandler(mansTrouble);