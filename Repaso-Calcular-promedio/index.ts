let jugadores: number = Number(prompt("Ingrese cantidad de jugadores"));
let edades: number = 0;
let promedio: number = 0;

function Aleatorio(min: number, max: number): number {
  edades = Math.floor(Math.random() * (max - min + 1)) + min;
  return edades;
}

let i: number = 0;

function Promedio(cantidad: number): number {
  let suma: number = 0;

  for (i = 0; i < cantidad; i++) {
    Aleatorio(3, 7);
    suma = suma + edades;
    console.log(edades);
  }
  promedio = suma / cantidad;
  return promedio;
}

Promedio(jugadores);
console.log(
  "El promedio de edad de los jugadores es de : " +
    promedio.toFixed(1) +
    " años"
);
