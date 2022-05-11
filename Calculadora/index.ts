let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
//let result = document.getElementById("result");

btnEnv.addEventListener("click", () => {
  let base: number = dato1.value;
  let altura: number = dato2.value;
  let area: number = base * altura;
  console.log("El area es " + area);
  document.write("El area es: " + area);
  //result.innerHTML = "El area del rectangulo es:" +area;
});
