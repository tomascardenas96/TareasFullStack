import Equipo from "./Equipo";
import Bomba from "./Bomba";
import {Motor, Eficiencia} from "./Motor";
import { Mangueras, Materiales } from "./Kit_mangueras";
import { MotorCombustible, Combustible } from "./M_combustible";
import MotorElectrico from "./M_electrico";

//Lista de arreglos, donde las clases con sus respectivos metodos
//.agregar() van agregando contenido.
let listaEquipos:Equipo[] = [];
let listaBombas:Bomba[] = [];
let listaMotores:Motor[] = [];
let listaKitMangueras:Mangueras[] = [];
let motoresCombustible:MotorCombustible[] = [];
let motoresElectricos:MotorElectrico[] = [];

//Fechas de prueba.
let fechaFab:Date = new Date(1997, 1, 11);
let fechaInst:Date = new Date(2022, 5, 9);

//Creo una bomba, manguera y motor de prueba.
let bomba:Bomba = new Bomba("Bomba1", 1, 0.5, "Mitsubishi");
let mangueraNueva:Mangueras = new Mangueras("Manguera1", 5, 2, Materiales.aluminio);
let motorNuevo:MotorCombustible = new MotorCombustible("MotorNuevo",1500, Eficiencia.A, "Ferrari", 8, Combustible.GNC);

//En el ultimo parametro, solo acepta entre motores a combustion o electricos.
let nuevoEquipo:Equipo = new Equipo("One", "Ejemplo 1", fechaFab, fechaInst, bomba, mangueraNueva, motorNuevo);
let nuevoEquipo2:Equipo = new Equipo("Two", "Ejemplo 2", fechaFab, fechaInst, bomba, mangueraNueva, motorNuevo);
let nuevoEquipo3:Equipo = new Equipo("Three", "Ejemplo 3", fechaFab, fechaInst, bomba, mangueraNueva, motorNuevo);

nuevoEquipo.agregar_equipo(listaEquipos);
nuevoEquipo2.agregar_equipo(listaEquipos);

nuevoEquipo.editar_equipo("Modificacion", "Ejemplo Mod", fechaFab, fechaInst, bomba, mangueraNueva, motorNuevo)

nuevoEquipo.todosLosEquipos(listaEquipos);


