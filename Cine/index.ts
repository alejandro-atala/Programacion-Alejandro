let cant: number = Number(prompt("Ingrese cantidad de butacas"));
let butacas: boolean[] = new Array(cant);
let vacias: number = 0;
let ocupadas: number = 0;

function ingresoButacas(cant: number) {
  for (let indice = 0; indice < cant; indice++) {
    butacas[indice] = confirm(
      "Butaca " + (indice + 1) + " Aceptar ocupada, Cancel vacia."
    );
  }
}
function seleccion(cant: number) {
  for (let indice2 = 0; indice2 < cant; indice2++) {
    if (butacas[indice2] === true) {
      ocupadas++;
    } else {
      vacias++;
    }
  }
}
ingresoButacas(cant);
seleccion(cant);

console.log("Butacas ingrsadas: " + cant);
console.log("ocupadas " + ocupadas);
console.log("vacias " + vacias);
