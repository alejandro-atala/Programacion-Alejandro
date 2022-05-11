import "./styles.css";
rotulo1.innerHTML = "Ingrese numero";

let contador: number = 1;
let claveIn: string;

while (contador <= 3 && claveIn != "eureka") {
  claveIn = prompt("Ingrese clave");
  contador++;
}

if (claveIn == "eureka") {
  console.log("Clave correcta");
  rotulo1.innerHTML = "Clave correcta";
} else {
  console.log("Clave incorrecta");
  rotulo1.innerHTML = "Clave incorrecta";
}
