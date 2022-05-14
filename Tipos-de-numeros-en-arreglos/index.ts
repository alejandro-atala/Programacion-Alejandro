let dimensioArreglo: number[] = Number(prompt("Ingrese dimension del arreglo"));

let arreglo: number[] = new Array(dimensioArreglo);

let indice: number;
let input: number;
let ceros: number = 0;
let pos: number = 0;
let neg: number = 0;

for (indice = 0; indice < dimensioArreglo; indice++) {
  input = Number(prompt("Ingrese numeros posicion " + indice));
  arreglo[indice] = input;

  if (input == 0) {
    ceros = ceros + 1;
  } else if (input < 0) {
    neg = neg + 1;
  } else if (input > 0) {
    pos = pos + 1;
  }
}

console.log("Cantidad de ceros: " + ceros);
console.log("Cantidad de positivos: " + pos);
console.log("Cantidad de negativos: " + neg);
