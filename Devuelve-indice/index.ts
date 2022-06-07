let notas: number = 0;
let obtenerMayorNota = () => {
  let mayorNota: number = 0;
  let indiceMayorNota: number = 0;
  for (let indice = 0; indice < 10; indice++) {
    if (notas[indice] > mayorNota) {
      mayorNota = notas[indice];
      indiceMayorNota = indice;
    }
  }
};
