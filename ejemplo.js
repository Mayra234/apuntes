/**
Diferentes formas de escribir lo mismo

*/

//Ejemplos con booleanos:

const bandera = true;

if (bandera == true) {
  console.log("Soy la primera forma de escribir un booleano en true");
}

if (bandera) {
  console.log("Soy la segunda forma de escribir un booleano en true");
}

bandera && console.log("Soy la tercera forma de escribir un booleano en true");

//EJEMPLO 2

const bandera1 = true;
const bandera2 = true;

if (bandera1 == true && bandera2 == true) {
  console.log("Soy la primera forma de escribir un booleano en true");
}

if (bandera1 && bandera2) {
  console.log("Soy la segunda forma de escribir un booleano en true");
}

bandera1 &&
  bandera2 &&
  console.log("Soy la tercera forma de escribir un booleano en true");

//Función declarativa -> se define por medio de la palabra reservada function
function saludar() {
  console.log("Hola");
}

saludar();

//Función expresiva -> se define guardando una fn anónima en una constante o variable
const ladrar = function () {
  console.log("Ladrar");
};

ladrar();

//Función expresiva, utilizando función flecha (arrow function)
const saltar = () => {
  console.log("Saltar");
};

saltar();

const imprimirMensaje = (texto) => {
  console.log(texto);
};

imprimirMensaje("Hola Angélica y Mayra");

const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};

const resultado = sumar(1, 1);
console.log(resultado);
