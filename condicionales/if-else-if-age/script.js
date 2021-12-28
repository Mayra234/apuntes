/*
  Preguntarle al usuario cual es su edad. 
  
  - Si la edad es menor a 18 años, debe imprimir en consola: "Eres menor de edad".
  - Si la edad es mayor o igual a 18 años, debe imprimir en consola: "Eres mayor de edad".
  - Si la edad es mayor o igual a 60 años, "Eres de la tercera edad".
  */

const respuesta = prompt("¿cuál es tu edad?");

if (respuesta < 18) {
  console.log("Eres menor de edad");
} else if (respuesta >= 18 && respuesta < 60) {
  console.log("Eres mayor de edad");
} else if (respuesta >= 60) {
  console.log("Eres de la tercera edad");
}
