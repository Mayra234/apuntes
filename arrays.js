/*
  	Arrays
  */

const name1 = "Juan";
const name2 = "Pedro";
const name3 = "Laura";

// ---------->    0        1       2
const names = ["Juan", "Pedro", "Laura"];
const fruits = ["Piña", "Uva", "Manzana"];

//Accediendo a los valores de un array
console.log(fruits[1]);
console.log(fruits[2]);

console.log(names[1]);

// Los arrays se deben escribir siempre en plural
const countries = ["Colombia", "EEUU", "Japón"];
const numbers = [1, 2, 3, 4, 5, 6, 7];
const booleans = [true, false];
const people = [
  { name: "Mayra", age: 20 },
  { name: "Luis", age: 10 },
];
const fullNames = [
  //0
  ["Marta", "Lopez"],
  //1
  ["Daniel", "Vera"],
  //2
  [
    "Victor", // 0
    "Gomez", // 1
  ],
];

console.log(numbers[2]);
console.log(numbers[6]);
console.log(booleans[1]);
console.log(people[1]);
console.log(people[1].age);
console.log(fullNames[2][1]);

const animals = [
  ["Perro", "Canino", "8 años"],
  ["Pato", "Ave", "5 años"],
  ["Cangrejo", "Crustaceo", "10 años"],
];

console.log(animals[2][1]);
console.log(animals[1][1]);
console.log(animals[0][1]);

/*
  Métodos básicos para manipular arrays.
  
  - Los métodos son funciones o acciones que trae un objeto.
 
 Un array en programación es un tipo de objeto especial de un lenguaje de
 programación que permite guardar múltiples valores en un espacio de memoria
 (variable o constante). Este tipo de objeto tiene métodos para el poderse
 modificar:
 
 - Agregar un item al final de un array -> push()
 - Agregar un item al inicio de un array -> unshift()
 - Eliminar un item al final de un array -> pop()
 - Eliminar un item al inicio de un array -> shift()
 - Copiar el array completo -> slice()
 - Recorrer cada uno de los items de un array -> forEach(...args)
 - Eliminar un item del array -> filter(...args)
*/

const salad = ["Lechuga", "Piña", "Fresa"];
console.log(salad);

//Agregar un item al final del array
salad.push("Crema de Leche");
console.log(salad);

salad.push("cebolla");
salad.push("tomate");
console.log(salad);

//Modificar un item existente en un array
salad[1] = "Uva";
console.log(salad);

salad[4] = "zanahoria";
console.log(salad);

//Borrar el último item de un array
salad.pop();
console.log(salad);

//Borrar el primer item de un array
salad.shift();
console.log(salad);

//Agregar items al inicio de un array
salad.unshift("Banano");
salad.unshift("Queso");
console.log(salad);

//Copiar el array
const secondSalad = salad.slice();
console.log("Original", salad);
console.log("Copia", secondSalad);

//Imprimir cada uno de los items del array
//Función común
console.log("---- Ingredientes de la ensalada original ----");
salad.forEach(function (ingredient) {
  console.log(ingredient);
});

//Función flecha
console.log("---- Ingredientes de la ensalada 2 ----");
secondSalad.forEach((ingredient) => {
  console.log(ingredient);
});

//Remover un elemento específico del array
const removeStrawberry = (ingredient) => {
  if (ingredient == "Fresa") {
    return false;
  } else {
    return true;
  }
};
const saladWithoutStrawberry = salad.filter(removeStrawberry);

console.log("Salad without strawberry", saladWithoutStrawberry);

//Remover varios elementos específicos de un array

const removeGrapeAndBanana = (ingredient) => {
  if (ingredient == "Uva" || ingredient == "Banano") {
    return false;
  } else {
    return true;
  }
};

const saladWithoutGrapeAndBanana = salad.filter(removeGrapeAndBanana);

console.log("Salad without grape and banana", saladWithoutGrapeAndBanana);

/*
  Métodos básicos para manipular arrays.
  
  - Los métodos son funciones o acciones que trae un objeto.
 
 Un array en programación es un tipo de objeto especial de un lenguaje de
 programación que permite guardar múltiples valores en un espacio de memoria
 (variable o constante). Este tipo de objeto tiene métodos para el poderse
 modificar:
 
 - Agregar un item al final de un array -> push()
 - Agregar un item al inicio de un array -> unshift()
 - Eliminar un item al final de un array -> pop()
 - Eliminar un item al inicio de un array -> shift()
 - Copiar el array completo -> slice()
 - Recorrer cada uno de los items de un array -> forEach(...args)
 - Eliminar un item del array -> filter(...args)
*/

let ensalada = ["Uvas", "Vinagre", "Tomate", "Lechuga"];

const quitarLechugaYVinagre = (ingrediente) => {
  if (ingrediente == "Vinagre" || ingrediente == "Lechuga") {
    //Si el filtrado retorna false, remueve el item
    return false;
  } else {
    return true;
  }
};

ensalada = ensalada.filter(quitarLechugaYVinagre);
console.log(ensalada);
