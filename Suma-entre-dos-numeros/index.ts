import "./styles.css";

rotulo1.innerHTML = "Ingrese el numero menor";
rotulo2.innerHTML = "Ingrese el numero mayor";

let input1: number = document.getElementById("input1");
let input2: number = document.getElementById("input2");
let suma: number = 0;
let cont: number;
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let num1: number = Number(input1.value);
  let num2: number = Number(input2.value);
  for (cont = num1; cont <= num2; cont++) {
    suma = suma + cont;
  }
  console.log("La suma entre los numeros ingresados es :" + suma);
  rotulo4.innerHTML = "La suma entre los numeros ingresados es: " + suma;

  suma = 0;
});
