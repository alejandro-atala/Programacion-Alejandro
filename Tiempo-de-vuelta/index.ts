let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");
let total: number;

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let tiempo1: number = Number(dato1.value);
  let tiempo2: number = Number(dato2.value);
  let tiempo3: number = Number(dato3.value);
  let tiempo4: number = Number(dato4.value);

  total = tiempo1 + tiempo2 + tiempo3 + tiempo4;
  console.log("El tiempo total es: " + total);
  console.log("El promedio de vuelta es: " + total / 4);
});
