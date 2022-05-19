let cant: number = Number(prompt("Ingrese cantidad de butacas"));

let butacas: number[] = new Array(cant);
let vacias: number = 0;
let ocupada: number = 0;
let indice: number;

function ingresoButacas(cantButacas: number) {
  for (indice = 0; indice < cantButacas; indice++) {
    butacas[indice] = prompt(
      "Ingrese 1 si esta acupada o 0 si esta desocupada, butaca " + (indice + 1)
    );
  }
}

function seleccion(cantButacas: number) {
  for (indice = 0; indice < cantButacas; indice++) {
    if (butacas[indice] == 1) {
      ocupada += 1;
    } else vacias += 1;
  }
  console.log("Butacas ocupadas: " + ocupada);
  console.log("Butacas vacias: " + vacias);
}
ingresoButacas(cant);
seleccion(cant);
