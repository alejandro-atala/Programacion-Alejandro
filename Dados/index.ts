import "./styles.css";

rotulo1.innerHTML = "Ingrese cantidad de dados";

let input1 = document.getElementById("input1");

let cantidad: number = 0;
let dados: number = 0;

let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  let cantidad: number = Number(input1.value);

  dados = Math.pow(6, cantidad);

  console.log("Provavilidades de sacar todos 6 es: 1 en " + dados);

  rotulo4.innerHTML = "Provavilidades de sacar todos 6 es:  1 en " + dados;
});
