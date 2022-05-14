let dimensionArreglo: number[] = Number(
  prompt("Ingrese dimension del arreglo")
);

let arregloNumeros: number[] = new Array(dimensionArreglo);
let indice: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNumeros[indice] = Number(prompt("Ingrese numeros posicion " + indice));
}
console.log(arregloNumeros.reverse());
