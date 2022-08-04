let nombres: string[] = new Array();
let edades: number[] = new Array();
let altura: number[] = new Array();
let numCliente: number;
let cantidad: number = Number(prompt("Ingrese cantidad de personas"));

for (numCliente = 0; numCliente < cantidad; numCliente++) {
  let nombre: string = prompt(`Nombre  ${numCliente + 1} : `);
  let edad: number = Number(prompt(`Edad  ${numCliente + 1} : `));
  let alt: number = Number(prompt(`Altura ${numCliente + 1} :  `));

  let i: number = 0;
  while (i < numCliente && edades[i] > edad) {
    i++;
  }
  for (let j: number = numCliente; j > i; j--) {
    nombres[j] = nombres[j - 1];
    edades[j] = edades[j - 1];
    altura[j] = altura[j - 1];
  }
  nombres[i] = nombre;
  edades[i] = edad;
  altura[i] = alt;
}

for (let posicion = 0; posicion < cantidad; posicion++) {
  console.log(
    `Nombre: ${nombres[posicion]} Edad: ${edades[posicion]} Altura: ${altura[posicion]}`
  );
}
