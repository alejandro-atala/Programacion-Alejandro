import "./styles.css";

rotulo1.innerHTML = "Ingrese numeros";

let input1 = document.getElementById("input1");
let cont: number = 0;
let pos: number = 0;
let total: number = 0;

btnEnv.addEventListener("click", () => {
  let num: number = Number(input1.value);

  if (num !== 0) {
    cont = cont + 1;

    if (num > 0) {
      pos = pos + 1;
    }
    document.getElementById("input1").value = "";
  } else {
    console.log("Ingreso 0, fin del programa");
    document.getElementById("input1").value = "Fin del programa";
  }
  total = (pos / cont) * 100;

  console.log(
    "Porcentaje de positivos ingrsados, respecto del total: " +
      total.toFixed(2) +
      "%"
  );
  rotulo4.innerHTML =
    "Porcentaje de positivos ingrsados, respecto del total:  " +
    total.toFixed(2) +
    "%";

  console.log("Cantidad de valores introducidos: " + cont);
  rotulo5.innerHTML = "Cantidad de valores introducidos: " + cont;
});
