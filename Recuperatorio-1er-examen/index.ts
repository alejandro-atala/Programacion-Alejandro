//RECUPERATORIO 1er examen
//Realizado el 24/6/22
//Comentarios y switch 26/6/22
//MODIFIQUE LA FORMA DE MOSTRAR LOS PRODUCTOS ---- 28/6/22 ----

//Ingreso de datos, declaracion de algunas variables y arrays
let cantidad: number = Number(
  prompt("Ingrese cantidad de productos que desea llevar")
);

let nombreProductos: string[] = new Array(cantidad);
let precioProducto: number[] = new Array(cantidad);
let cantProducto: number[] = new Array(cantidad);
let total: number = 0;

//Funcion para carga de arrays, calculos de unidades y precios
function cargarProductos(productos: string[], precio: number[], cant: number) {
  let msj: string = "";
  let i: number = 0;
  let unit: number = 0;
  let unidades: number = 0;

  for (i = 0; i < cant; i++) {
    //Ingreso de mas datos de la compra
    productos[i] = prompt("Ingrese nombre de producto");
    precio[i] = Number(prompt("Ingrese valor del producto"));
    unidades = Number(prompt("Ingrese unidades del producto"));
    cantProducto[i] = unidades;
    unit += unidades;
    total += precio[i] * unidades;
  }
  //Muestra por consola el mensaje con los datos solicitados
  msj = "Detalle de la compra: ";
  msj += " Usted compro " + unit + " productos...   .";
  msj += " El total de su compra es de $ " + total;
  console.log(msj);
  for (i = 0; i < cant; i++) {
    console.log(
      " Precio de " +
        cantProducto[i] +
        " " +
        productos[i] +
        " es $ " +
        precio[i] * cantProducto[i] +
        ", " +
        precio[i] +
        " c/u."
    );
  }
}
//Llamada a la funcion con parametros
cargarProductos(nombreProductos, precioProducto, cantidad);

/*
//Validacion IF ELSE para saber dependiendo del monto si entra en algun sorteo

if (total < 1000) {
  console.log("Su compra es de $" + total + ", no participa del sorteo");
} else if (total >= 1000 && total < 2000) {
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de un Tv LED"
  );
} else if (total >= 2000 && total < 3000) {
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de una moto 0Km"
  );
} else
  console.log(
    "Su compra es de $" + total + " y participa por le sorteo de un Auto 0 Km"
  );
*/

//QUERIA VER COMO ME FUNCIONABA VALIDANDO CON UN SWITCH Y FUNCIONA!!
switch (true) {
  case total < 1000:
    console.log("Su compra es de $" + total + ", no participa del sorteo");
    break;

  case total >= 1000 && total < 2000:
    console.log(
      "Su compra es de $" + total + " y participa por le sorteo de un Tv LED"
    );
    break;

  case total >= 2000 && total < 3000:
    console.log(
      "Su compra es de $" + total + " y participa por le sorteo de una moto 0Km"
    );
    break;

  case total >= 3000:
    console.log(
      "Su compra es de $" + total + " y participa por le sorteo de un Auto 0 Km"
    );
    break;
}

//end
