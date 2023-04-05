import { GestorClub } from "./GestorClub";

let nuevo:GestorClub = new GestorClub();
nuevo.agregarSocio();
nuevo.agregarSocio();
nuevo.buscarPorNombre("Tomas");

console.log(nuevo);