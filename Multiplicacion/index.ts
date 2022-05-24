let array1: number[] = new Array(3);
let array2: number[] = new Array(3);
let array3: number[] = new Array(3);
let array4: number[] = new Array(3);
let resultado: number[] = new Array(3);
let i = 0;

let cargarArray = (
  array_1: number[],
  array_2: number[],
  array_3: number[],
  array_4: number[]
) => {
  for (i = 0; i < 3; i++) {
    array_1[i] = Number(prompt("Ingrese numeros en array 1"));
  }
  for (i = 0; i < 3; i++) {
    array_2[i] = Number(prompt("Ingrese numeros en array 2"));
  }
  for (i = 0; i < 3; i++) {
    array_3[i] = Number(prompt("Ingrese numeros en array 3"));
  }
  for (i = 0; i < 3; i++) {
    array_4[i] = Number(prompt("Ingrese numeros en array 4"));
  }
};

let multiplicarArreglo = (array_A: number[], array_B: number[]): number[] => {
  for (i = 0; i < 3; i++) {
    resultado[i] = array_A[i] * array_B[i];
  }
  return resultado;
};

cargarArray(array1, array2, array3, array4);

multiplicarArreglo(array1, array2);
console.log(resultado);
multiplicarArreglo(resultado, array3);
console.log(resultado);
multiplicarArreglo(resultado, array4);
console.log(resultado);
