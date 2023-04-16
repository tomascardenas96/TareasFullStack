import * as fs from "fs";

let check = (path:string) => {
    if(fs.existsSync(path)) {
        console.log("Ruta existente");
        return true;
    } else {
    console.log("Ruta inexistente");
    return false;
    }
}

let read = (path: string): Object | undefined => {
    try {
        return JSON.parse(fs.readFileSync(path, "utf8"))
    } catch (error) {
        console.log("Error");
    }
}

let write = (path: string, data: string) => {
        return fs.writeFileSync(path, JSON.stringify(data), "utf8");
}

let save = (path: string, data: string) => {
    if (check(path)) {
        let aux: Object | undefined = read(path);
        
    } else {
        
    }

}
let path:string = "./alumno.json"



