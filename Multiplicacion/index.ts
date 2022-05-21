let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let array3: number[] = [2, 1, 2];
let array4: number[] = [1, 2, 1];
let resultado: number[] = new Array(3);
let i = 0;

let multiplicarArreglo = (
  array_1: number[],
  array_2: number[],
  array_3: number[],
  array_4: number[]
): number[] => {
  for (i = 0; i < 3; i++) {
    resultado[i] = array_1[i] * array_2[i] * array_3[i] * array_4[i];
  }
  return resultado;
};

console.log(multiplicarArreglo(array1, array2, [1, 1, 1], [1, 1, 1]));

console.log(multiplicarArreglo(array1, array2, array3, array4));
