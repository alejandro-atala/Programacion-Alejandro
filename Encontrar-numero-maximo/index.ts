import "./styles.css";

rotulo1.innerHTML = "Ingrese valores";

let input1 = document.getElementById("input1");
let max: number = 0;
let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  let num: number = Number(input1.value);

  while (num != 0 && num > max) {
    max = num;
  }
  if (num == 0) {
    console.log("Usted ingreso 0, sale del programa");
    rotulo4.innerHTML = "Usted ingreso 0, sale del programa ";
    console.log("El numero mayor es: " + max);
    rotulo5.innerHTML = "El numero maximo es: " + max;
  }
});
