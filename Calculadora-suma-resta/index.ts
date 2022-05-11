import "./styles.css";
/*
rotulo1.innerHTML = "Ingrese el numero ";
rotulo2.innerHTML = "Ingrese el numero ";
rotulo3.innerHTML = "Ingrese 1 Suma, 2 Resta";

let input1: number = document.getElementById("input1");
let input2: number = document.getElementById("input2");
let operacion: number = document.getElementById("input3");

let resultado: number = 0;
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let inp1: number = Number(input1.value);
  let inp2: number = Number(input2.value);
  let oper: number = Number(operacion.value);
  let linea: string = "-";

  if (oper === 1) {
    resultado = inp1 + inp2;
  } else if (oper === 2) {
    resultado = inp1 - inp2;
  } else {
    console.log("La operacion es incorrecta");
  }

 
  console.log("El resultado es: " + resultado);

  rotulo4.innerHTML = "El resultado es: " + resultado;



let dibujarGuiones = (cantidad : number) => {
  for (let i: number = 0; i <= cantidad; i++) {
    linea = linea + "-";
 
  }
  console.log(linea);
}
dibujarGuiones(20);

});
*/
rotulo1.innerHTML = "Ingrese el numero ";
rotulo2.innerHTML = "Ingrese el numero ";
rotulo3.innerHTML = "Ingrese 1 Suma, 2 Resta";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let operacion = document.getElementById("input3");

let resultado: number = 0;
let btnEnv = document.getElementById("btnEnviar");

let inp1: number = Number(input1.value);
let inp2: number = Number(input2.value);
let oper: number = Number(operacion.value);
let linea: string = "-";

let calcularResultado = (inp1: number, inp2: number, oper: number): number => {
  if (oper == 1) {
    resultado = inp1 + inp2;
  } else if (oper == 2) {
    resultado = inp1 - inp2;
  } else {
    console.log("incorrecto");
  }
  return resultado;
};

btnEnv.addEventListener("click", () => {
  let total: number = calcularResultado(
    Number(input1.value),
    Number(input2.value),
    Number(operacion.value)
  );

  console.log(total);
});
