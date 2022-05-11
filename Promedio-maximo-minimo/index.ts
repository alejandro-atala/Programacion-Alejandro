let input, sum, cont, prom: number;

cont = 0;
sum = 0;

input = Number(prompt("Ingrese valor"));

let max: number = input;
let min: number = input;

while (input !== 0) {
  sum = sum + input;
  cont++;

  if (input > max) {
    max = input;
  } else if (input < min) {
    min = input;
  }
  input = Number(prompt("Ingrese valor"));
}
prom = sum / cont;

console.log(
  "El maximo es: " +
    max +
    ". El minimo es: " +
    min +
    ". El promedio es: " +
    prom
);
