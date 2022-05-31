let edad: number = 0;
let Aleatorio = (min: number, max: number): number => {
  edad = Math.floor(Math.random() * (max - min)) + min;
  return edad;
};

let cantidad: number = Aleatorio(1, 270);
let i: number = 0;
let array: number[] = new Array(cantidad);
let menores: number = 0;
let mayores: number = 0;

let cargarPersonas = (array: number[], cant: number): number[] => {
  for (i = 0; i < cant; i++) {
    array[i] = Aleatorio(18, 40);
  }
  return array;
};

let seleccion = (array: number[], cant: number) => {
  for (i = 0; i < cant; i++) {
    if (array[i] >= 21) {
      mayores++;
    } else {
      menores++;
    }
  }
};
console.log(cargarPersonas(array, cantidad));
seleccion(array, cantidad);
console.log("Los menores son: " + menores);
console.log(`Los mayores son ${mayores}`);
console.log(`La cantidad de personas es ${cantidad}`);
