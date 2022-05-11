import "./styles.css";

rotulo1.innerHTML = "Ingrese numero de la tabla";
rotulo2.innerHTML = "Ingrase hasta que numero desea multiplicar";
let btnEnv = document.getElementById("btnEnviar");

let input1: number = document.getElementById("input1");
let input2: number = document.getElementById("input2");
let cont: number;
let salida: number = 0;

btnEnv.addEventListener("click", () => {
  let num1: number = Number(input1.value);
  let num2: number = Number(input2.value);

  for (cont = 0; cont <= num2; cont++) {
    salida = num1 * cont;

    rotulo4.innerHTML =
      "Muestra por consola porque no se como hacer una tabla en pantalla";

    console.log(num1 + "*" + cont + "=" + salida);
  }
});
