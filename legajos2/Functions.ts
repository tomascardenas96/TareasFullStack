import * as fs from "fs";

let check = (path:string) => {
    if(fs.existsSync(path)) {
        return true;
    } else {
    return false;
    }
}

let read = (path: string): any  => {
    try {
        return JSON.parse(fs.readFileSync(path, "utf8"))
    } catch (error) {
        console.log("Error");
    }
}

let write = (path: string, data: Object) => {
        return fs.writeFileSync(path, JSON.stringify(data), "utf8");
}

let save = (path: string, data: Object) => {
    if (check(path)) {
        let prueba = [...read(path), data];
        return write(path, prueba);
    } else {
        return write(path, [data]);
    }
}

export { save, read, check, write };







