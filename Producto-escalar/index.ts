let dimension: number = Number(prompt("Ingrese dimension del array"));

let array1: number[] = new Array(dimension);
let array2: number[] = new Array(dimension);
let array3: number[] = new Array(dimension);
let indice: number;
let suma: number = 0;
//Funcion-----------------------------------------------------
function cargarVector(array: number[], dimension: number, X: string) {
  for (indice = 0; indice < dimension; indice++) {
    array[indice] = Number(
      prompt("Ingrese valor en array " + X + ", posicion " + indice)
    );
  }
}
//Funcion------------------------------------------------------

cargarVector(array1, dimension, "A");
cargarVector(array2, dimension, "B");

for (indice = 0; indice < dimension; indice++) {
  array3[indice] = array1[indice] * array2[indice];
  suma = suma + array3[indice];
}
console.log("El producto escalar es: " + suma);
