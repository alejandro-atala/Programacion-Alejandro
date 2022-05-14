let dimensionArreglo: number = Number(prompt("Ingrese dimension del arreglo"));

let arreglo1: number[] = new Array(dimensionArreglo);
let arreglo2: number[] = new Array(dimensionArreglo);
let arreglo3: number[] = new Array(dimensionArreglo);

let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo1[indice] = Number(
    prompt("Ingrese numero en arreglo A, posicion " + indice)
  );
  arreglo2[indice] = Number(
    prompt("Ingrese numero en arreglo B, posicion " + indice)
  );
  arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "La suma de cada posicion en ambos arreglos es: posicion " +
      indice +
      " = " +
      arreglo3[indice]
  );
}
