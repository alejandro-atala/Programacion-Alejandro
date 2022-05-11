import "./styles.css";

rotulo1.innerHTML = "Ingrese base";
rotulo2.innerHTML = "Ingrese exponente";

let input1: number = document.getElementById("input1");
let input2: number = document.getElementById("input2");
let btnEnv = document.getElementById("btnEnv");
let resultado: number = 0;
//Funcion ---------------------------------------------
let exponente = (base: number, expo: number): number => {
  if (expo >= 0) {
    if (expo === 0) {
      resultado = 1;
      return resultado;
    } else {
      resultado = Math.pow(base, expo);
    }
    return resultado;
  } else {
    console.log("El exponente ingresado es incorrecto");
  }
};
//Funcion -----------------------------------------------

btnEnv.addEventListener("click", () => {
  //Llamada a la funcion con parametros ingresados

  console.log(exponente(Number(input1.value), Number(input2.value)));
  rotulo3.innerHTML = "El resultado es: " + resultado;
});
