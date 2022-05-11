import "./styles.css";

rotulo1.innerHTML = "Ingrese alumno";
rotulo2.innerHTML = "ingrese calificacion 1";
rotulo3.innerHTML = "ingrese calificacion 2";
rotulo4.innerHTML = "ingrese calificacion 3";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let btnEnv = document.getElementById("btnEnviar");
let practica: number = 0;
let problemas: number = 0;
let teoria: number = 0;

btnEnv.addEventListener("click", () => {
  let alumno: string = input1.value;
  let nota1: number = Number(input2.value);
  let nota2: number = Number(input3.value);
  let nota3: number = Number(input4.value);

  if (alumno != "") {
    let suma = (nota1 + nota2 + nota3) / 3;

    if (suma >= 0 && suma <= 30) {
      practica = suma * 0.1 * 10;
      problemas = suma * 0.5 * 10;
      teoria = suma * 0.4 * 10;

      console.log("Alumno: " + alumno);
      console.log("Nota de Practica: " + practica.toFixed(1) + "%");
      console.log("Nota de Problemas: " + problemas.toFixed(1) + "%");
      console.log("Nota de Teoria: " + teoria.toFixed(1) + "%");
      rotulo5.innerHTML = "Alumno: " + alumno;
      rotulo6.innerHTML = "Nota de Practica: " + practica.toFixed(1) + "%";
      rotulo7.innerHTML = "Nota de Problemas: " + problemas.toFixed(1) + "%";
      rotulo8.innerHTML = "Nota de Teoria: " + teoria.toFixed(1) + "%";
    }
  } else {
    console.log("Fin del calificaciones");
    rotulo9.innerHTML = "Fin del calificaciones";
  }
});
