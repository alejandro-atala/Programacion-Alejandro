import "./styles.css";

rotulo1.innerHTML = "Ingrese numero";
let input1: number = document.getElementById("input1");
let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  let resultado: number = 0;
  let i = 0;

  //Funcion ---------------------------------------------
  let cantidadDeDivisores = (num: number): number => {
    for (i = 0; i <= num; i++) {
      if (num % i === 0) {
        resultado = resultado + 1;
      }
    }
    return resultado;
  };
  //Funcion -----------------------------------------------

  //Llamada a la funcion con parametros
  console.log(cantidadDeDivisores(Number(input1.value)));

  rotulo2.innerHTML = "La cantidad de divisores es: " + resultado;
});
