let cantidadProductos: number = Number(prompt("Ingrese cantidad de productos"));

let arrayProductos: number[] = new Array(cantidadProductos);

//------------------------------------------------------------------
function cargarArray(array: number[], longitud: number) {
  let i: number = 0;
  for (i = 0; i < longitud; i++) {
    array[i] = Number(prompt("Ingrese valores " + (i + 1)));
  }
  console.log(array);
}
//--------------------------------------------------------------------
function calcularCompra(array: number[], cantidad: number) {
  let i: number = 0;
  let suma: number = 0;
  for (i = 0; i < cantidad; i++) {
    suma += array[i];
  }
  if (suma > 3000 && suma <= 5000) {
    suma = suma * 0.9;
    console.log("Usted tiene descuento del 10%, su compra es $ " + suma);
  } else if (suma > 5000) {
    suma = suma * 0.8;
    console.log("Usted tiene descuento del 20%, su compra es $ " + suma);
  } else {
    console.log("Usted no tiene descuento, su compra es $ " + suma);
  }
}
//--------------------------------------------------------------------
function aplicarIva(array: number[], cantidad: number) {
  let i: number = 0;
  let suma: number = 0;
  for (i = 0; i < cantidad; i++) {
    suma += array[i] * 1.21;
  }
  console.log("El valor con IVA es: $" + suma);
}

cargarArray(arrayProductos, cantidadProductos);

calcularCompra(arrayProductos, cantidadProductos);

let arrayProductos2 = arrayProductos.slice();
aplicarIva(arrayProductos2, cantidadProductos);
