let jugadores: number = Number(prompt("Ingrese cantidad de jugadores"));
let edades: number[] = new Array(jugadores);
let promedio: number = 0;
let edad = 0;
//----------------------------------------------------------
function Aleatorio(min: number, max: number): number {
  edad = Math.floor(Math.random() * (max - min + 1)) + min;
  return edad;
}
//--------------------------------------------------------
let i: number = 0;
//----------------------------------------------------------
function Promedio(cantidad: number, edades: number[]): number {
  let suma: number = 0;

  for (i = 0; i < cantidad; i++) {
    suma = suma + Aleatorio(3, 7);
    console.log(edad);
  }
  promedio = suma / cantidad;
  return promedio;
}
//-------------------------------------------------------------
Promedio(jugadores, edades);
console.log(
  "El promedio de edad de los jugadores es de : " +
    promedio.toFixed(1) +
    " años"
);
