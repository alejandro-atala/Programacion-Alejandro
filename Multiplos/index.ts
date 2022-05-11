import "./styles.css";

rotulo1.innerHTML = "Ingrese numero";
rotulo2.innerHTML = "Ingrese numero";
rotulo3.innerHTML = "1 - Son multiplos, 0 - No son multiplos";
let input1: number = document.getElementById("input1");
let input2: number = document.getElementById("input2");
let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  let resultado: number;

  //Funcion ---------------------------------------------
  let esMultiplo = (num1: number, num2: number): number => {
    if (num1 % num2 === 0) {
      resultado = 1;
      return resultado;
    } else {
      resultado = 0;
      return resultado;
    }
  };
  //Funcion -----------------------------------------------

  //Llamada a la funcion con parametros
  esMultiplo(Number(input1.value), Number(input2.value));
  rotulo4.innerHTML = "Resultado " + resultado;
});
