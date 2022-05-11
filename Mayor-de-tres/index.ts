import "./styles.css";

rotulo1.innerHTML = "Ingrese numero";
rotulo2.innerHTML = "Ingrese numero";
rotulo3.innerHTML = "Ingrese numero";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);
  let num3: number = Number(dato3.value);

  if (num1 > num2 && num1 > num3) {
    console.log("El numero mayor es: " + num1);
    rotulo4.innerHTML = "El numero mayor es: " + num1;
  } else if (num2 > num3 && num2 > num1) {
    console.log("El numero mayor es: " + num2);
    rotulo4.innerHTML = "El numero mayor es: " + num2;
  } else {
    console.log("El numero mayor es: " + num3);
    rotulo4.innerHTML = "El numero mayor es: " + num3;
  }
});
