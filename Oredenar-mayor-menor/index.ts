let miNumero: number = Number(prompt("Ingrese un numero"));

function invertirArray(numero: number): number[] {
  let i: number;
  let array: number[] = new Array(numero);

  for (i = 0; i < array.length; i++) {
    array[i] = numero;
    numero--;
  }
  return array;
}

console.log(invertirArray(miNumero));
