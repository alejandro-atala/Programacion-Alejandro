import "./styles.css";

let cont: number = 0;

for (cont; cont < 100; cont++) {
  if (cont % 2 === 0 || cont % 3 === 0) {
    console.log(cont);
    //    rotulo1.innerHTML = "Los numeros divisibles por 2 y por 3 son: " + cont;
  }
}
