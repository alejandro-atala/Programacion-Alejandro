import "./styles.css";

rotulo1.innerHTML = "Ingrese precio del producto";
rotulo2.innerHTML = "Ingrese cantidad de productos";
rotulo3.innerHTML = "Ingrese mes";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let precio: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let mes: string = dato3.value;
  let descuento: number;
  let oct: string = "octubre";
  let Oct: string = "Octubre";

  if (mes == oct || mes == Oct) {
    descuento = (precio * cantidad * 0.85).toFixed(2);
    console.log(
      "Felicitaciones, en el mes de Octubre tenemos un descuento del 15%. Total a pagar: $" +
        descuento
    );
    rotulo4.innerHTML =
      "Felicitaciones, en el mes de Octubre tenemos un descuento del 15%. Total a pagar: $" +
      descuento;
  } else {
    console.log(
      "En este mes no tenemos descuentos. Total a apgar: $" + precio * cantidad
    );
    rotulo4.innerHTML =
      "En este mes no tenemos descuentos. Total a apgar: $" + precio * cantidad;
  }
});
