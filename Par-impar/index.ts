import "./styles.css";

rotulo1.innerHTML = "Ingrese un numero";

let dato1 = document.getElementById("dato1");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero: number = Number(dato1.value);

  if (numero == 0) {
    console.log("El numero ingresado es CERO, vuelva a ingresar otro numero");
    rotulo4.innerHTML =
      "El numero ingresado es CERO, vuelva a ingresar otro numero";
  } else if (numero % 2 == 0) {
    console.log("El numero ingresado es PAR");
    rotulo4.innerHTML = "El numero ingresado es PAR";
  } else {
    console.log("El numero " + numero, "es Impar");
    rotulo4.innerHTML = "El numero ingresado es Impar";
  }
});
