let numAleatorio: number = 0;
let Aleatorio = (min: number, max: number): number => {
  numAleatorio = Math.floor(Math.random() * (max - min)) + min;
  return numAleatorio;
};

let array1: number[] = new Array(10);
let array2: number[] = new Array(10);
let i: number = 0;
let r: number = 0;

for (i = 0; i < 10; i++) {
  array1[i] = Aleatorio(0, 100);
  array2[i] = Aleatorio(0, 100);
}

for (i = 0; i < array2.length; i++) {
  for (r = 0; r < array2.length; r++) {
    if (array1[i] === array2[r]) {
      console.log(`Los iguales son ${array1[i]} en la posicion ${i} & ${r}`);
    }
  }
}
