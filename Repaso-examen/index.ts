let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
let i: number = 0;
let A: number = 0;
let B: number = 0;
let C: number = 0;
let promedio: number = 0;

//--------------------------------------------
function Promedio(comision: number[]): number {
  let suma: number = 0;

  for (i = 0; i < comision.length; i++) {
    suma += comision[i];
  }
  promedio = suma / comision.length;
  return promedio;
}

//-----------------------------------------------------------------------
function mayorPromedio(comA: number[], comB: number[], comC: number[]) {
  Promedio(comA);
  A = promedio;
  Promedio(comB);
  B = promedio;
  Promedio(comC);
  C = promedio;

  if (A > B && A > C) {
    console.log("Comision A es el mayor " + A);
  } else if (B > C && B > A) {
    console.log("Comision B es el mayor " + B);
  } else {
    console.log("Comision C es el mayor " + C);
  }
}
//------------------------------------------------------------------------
function menorPromedio(comA: number[], comB: number[], comC: number[]) {
  Promedio(comA);
  A = promedio;
  Promedio(comB);
  B = promedio;
  Promedio(comC);
  C = promedio;

  if (A < B && A < C) {
    console.log("Comision A es el menor " + A);
  } else if (B < C && B < A) {
    console.log("Comision B es el menor " + B);
  } else {
    console.log("Comision C es el menor " + C);
  }
}
//------------------------------------------------------------------------
function menor6(comision: number[]): number {
  let menor: number = 0;
  for (i = 0; i < comision.length; i++) {
    if (comision[i] < 6) {
      menor++;
    }
  }
  return menor;
}
//------------------------------------------------------------------------

function menorNota(comision: number[]): number {
  let m = Math.min(...comision);
  return m;
}

//-------------------------------------------------------------------------

mayorPromedio(comisionA, comisionB, comisionC);
menorPromedio(comisionA, comisionB, comisionC);
console.log("Comision A. Los menores de 6 son: " + menor6(comisionA));
console.log("Comision B. Los menores de 6 son: " + menor6(comisionB));
console.log("Comision C. Los menores de 6 son: " + menor6(comisionC));
console.log("Menor nota comision A es: " + menorNota(comisionA));
console.log("Menor nota comision B es: " + menorNota(comisionB));
console.log("Menor nota comision C es: " + menorNota(comisionC));
