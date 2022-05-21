let cantidad: number = Number(prompt("Ingrese cantidad de alumnos"));

let alum: string[] = new Array(cantidad);
let notas: number = 0;
let indice: number;
let indice2: number;

let promedio = (alumnos: string[], cantAlumnos: number) => {
  for (indice = 0; indice < cantAlumnos; indice++) {
    alumnos[indice] = prompt("Ingrese nombre del alumno");
    notas = 0;

    for (indice2 = 0; indice2 < 3; indice2++) {
      notas += Number(
        prompt("Ingrese nota del " + (indice2 + 1) + "° trimestre del alumno ")
      );
    }
    console.log(
      "La nota promedio del alumno " +
        alumnos[indice] +
        " es " +
        (notas / 3).toFixed(2)
    );
  }
};

promedio(alum, cantidad);
