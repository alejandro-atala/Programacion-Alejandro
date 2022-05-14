let dimensionArreglo: number[] = Number(
  prompt("Ingrese dimension del arreglo")
);

let arregloNumeros: number[] = new Array(dimensionArreglo);
let indice: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNumeros[indice] = Number(prompt("Ingrese numeros posicion " + indice));
}

//Forma sencilla------------------------------------------
//console.log(arregloNumeros.reverse());
//--------------------------------------------------------

//Forma basica
let salida: string = "";
indice = dimensionArreglo - 1;

for (indice; indice >= 0; indice--) {
  salida = salida + " " + arregloNumeros[indice];
}
console.log("Arreglo invertido: " + salida);
