// Crear una superclase JuegoDeCasino.
// Crear dos clases que hereden de ella (pueden ser juegos puntuales, craps,
// tragamonedas, ruleta, BlackJack, etc…)
// Luego, aplicar composición entre una clase Casino y las dos clases hijas de JuegodeCasino.
// Crear los diagramas de clases de la solución que propongan.

import Cuenta from "./Cuenta";
import Poker from "./Poker";
import Ruleta from "./Ruleta";
import Casino from "./Casino";

//Creamos una cuenta donde depositar.
let cuentaNueva = new Cuenta("Tomas", "Cardenas");

//Clase compuesta entre ambas hijas de JuegoDeCasino.
let generalSettings = new Casino(2500, false);

//Creamos una instancia de Ruleta.
let ruleta = new Ruleta(generalSettings);

ruleta.hacerApuesta(15, 1, 0);
ruleta.girarRuleta();
ruleta.mostrarResultados();
ruleta.retirarDinero(500, cuentaNueva);



