let array1: number[] = new Array(3);
let array2: number[] = new Array(3);
let array3: number[] = new Array(3);
let array4: number[] = new Array(3);
let resultado: number[] = new Array(3);
let i = 0;

let cargarArray = (array: number[], num: number): number[] => {
  for (i = 0; i < 3; i++) {
    array[i] = Number(prompt("Ingrese numeros en array " + num));
  }
  return array;
};

let multiplicarArreglo = (array_A: number[], array_B: number[]): number[] => {
  for (i = 0; i < 3; i++) {
    resultado[i] = array_A[i] * array_B[i];
  }
  return resultado;
};

console.log(cargarArray(array1, 1));
console.log(cargarArray(array2, 2));
console.log(cargarArray(array3, 3));
console.log(cargarArray(array4, 4));

multiplicarArreglo(array1, array2);
console.log("El resultado de " + array1 + " * " + array2 + " es: " + resultado);
multiplicarArreglo(resultado, array3);
console.log(
  "El resultado de " +
    array1 +
    " * " +
    array2 +
    " * " +
    array3 +
    " es: " +
    resultado
);
multiplicarArreglo(resultado, array4);
console.log(
  "El resultado de " +
    array1 +
    " * " +
    array2 +
    " * " +
    array3 +
    " * " +
    array4 +
    " es: " +
    resultado
);
