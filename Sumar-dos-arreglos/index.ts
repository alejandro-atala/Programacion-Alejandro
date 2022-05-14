let dimensionArreglo: number = Number(prompt("Ingrese dimension del arreglo"));

let arreglo1: number[] = new Array(dimensionArreglo);
let arreglo2: number[] = new Array(dimensionArreglo);
let arreglo3: number[] = new Array(dimensionArreglo);

let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo1[indice] = Number(
    prompt("Ingrese numero en arreglo 1, posicion " + indice)
  );
  arreglo2[indice] = Number(
    prompt("Ingrese numero en arreglo 2, posicion " + indice)
  );
  arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "La suma de ambos arreglos es: posicion " +
      indice +
      " = " +
      arreglo3[indice]
  );
}
