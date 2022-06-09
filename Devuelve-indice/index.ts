let array: number[] = [1, 2, 8, 4, 5];

let notas: number = 0;
let obtenerMayorNota = (notas: number[]): number => {
  let mayorNota: number = 0;
  let indiceMayorNota: number = 0;
  for (let indice = 0; indice < 10; indice++) {
    if (notas[indice] > mayorNota) {
      mayorNota = notas[indice];
      indiceMayorNota = indice;
    }
  }
  return indiceMayorNota;
};

console.log(obtenerMayorNota(array));
