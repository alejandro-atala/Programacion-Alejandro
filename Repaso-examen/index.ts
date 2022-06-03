let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
let prom: number = 0;
let a: number = 0;
let b: number = 0;
let c: number = 0;

//--------------------------------------------
function calcularPromedio(comision: number[]): number {
  let suma: number = 0;
  let i: number = 0;

  for (i = 0; i < comision.length; i++) {
    suma += comision[i];
  }
  prom = suma / comision.length;
  return prom;
}

//-----------------------------------------------------------------------
function calcularMayorPromedio(comA: number[], comB: number[], comC: number[]) {
  calcularPromedio(comA);
  a = prom;
  calcularPromedio(comB);
  b = prom;
  calcularPromedio(comC);
  c = prom;

  if (a > b && a > c) {
    console.log("Comision A es el mayor " + a);
  } else if (b > c && b > a) {
    console.log("Comision B es el mayor " + b);
  } else {
    console.log("Comision C es el mayor " + c);
  }
}
//------------------------------------------------------------------------
function calcularMenorPromedio(comA: number[], comB: number[], comC: number[]) {
  calcularPromedio(comA);
  a = prom;
  calcularPromedio(comB);
  b = prom;
  calcularPromedio(comC);
  c = prom;

  if (a < b && a < c) {
    console.log("Comision A es el menor " + a);
  } else if (b < c && b < a) {
    console.log("Comision B es el menor " + b);
  } else {
    console.log("Comision C es el menor " + c);
  }
}
//------------------------------------------------------------------------
function contarMenorA(comision: number[], num: number): number {
  let menor: number = 0;
  let i: number = 0;
  for (i = 0; i < comision.length; i++) {
    if (comision[i] < num) {
      menor++;
    }
  }
  return menor;
}
//------------------------------------------------------------------------

function calcularMenorNota(comision: number[]): number {
  let m = Math.min(...comision);
  return m;
}

//-------------------------------------------------------------------------

calcularMayorPromedio(comisionA, comisionB, comisionC);
calcularMenorPromedio(comisionA, comisionB, comisionC);
console.log("Comision A. Los menores de 6 son: " + contarMenorA(comisionA, 6));
console.log("Comision B. Los menores de 6 son: " + contarMenorA(comisionB, 6));
console.log("Comision C. Los menores de 6 son: " + contarMenorA(comisionC, 6));
console.log("Menor nota comision A es: " + calcularMenorNota(comisionA));
console.log("Menor nota comision B es: " + calcularMenorNota(comisionB));
console.log("Menor nota comision C es: " + calcularMenorNota(comisionC));
