let notasAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
let meses: string[] = [
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
let indice: number;

// ésta función muestra los meses desaprobados
let mostrarMesesDesaprobados = (
  notasAlumno: number[],
  meses: string[]
): string => {
  let mesesDesaprobados: string = " ";
  for (indice = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < 6) {
      mesesDesaprobados += meses[indice] + ", ";
    }
  }
  return mesesDesaprobados;
};
console.log(
  `Meses desaprobados: ${mostrarMesesDesaprobados(notasAlumno, meses)}`
);

//Ésta función muestra la menor nota y en que mes fue
let buscarMenorNota = (notasAlumno: number[], meses: string[]): any => {
  let notaMin: number = 11;
  let mesMin: string = " ";
  for (indice = 0; indice < meses.length; indice++) {
    if (notasAlumno[indice] < notaMin) {
      notaMin = notasAlumno[indice];
      mesMin = meses[indice];
    }
  }
  return console.log(
    `La menor nota es ${notaMin} y fue en el mes de ${mesMin}`
  );
};
buscarMenorNota(notasAlumno, meses);

//Ésta función muetra la mayor nota y en que mes fue

let buscarMayorNota = (notasAlumno: number[], meses: string[]): any => {
  let notaMax: number = -1;
  let mesMax: string = " ";
  for (indice = 0; indice < meses.length; indice++) {
    if (notasAlumno[indice] >= notaMax) {
      notaMax = notasAlumno[indice];
      mesMax = meses[indice];
    }
  }
  return console.log(
    `La mayor nota es ${notaMax} y fue en el mes de ${mesMax}`
  );
};
buscarMayorNota(notasAlumno, meses);

// Función promedio
let calcularPromedio = (notasAlumno: number[]): number => {
  let suma: number = 0;
  let promedio: number = 0;
  for (indice = 0; indice < notasAlumno.length; indice++) {
    suma += notasAlumno[indice];
  }
  promedio = suma / notasAlumno.length;
  return promedio;
};

console.log(`El promedio del alumns es ${calcularPromedio(notasAlumno)}`);