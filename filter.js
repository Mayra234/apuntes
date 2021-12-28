/* Forma larga de filtrar V1**/

let ensalada = [
  "Uvas",
  "Vinagre",
  "Tomate",
  "Lechuga",
  "Piña",
  "Manzana",
  "Cebolla",
];

const quitarLechugaYVinagre = (item) => {
  if (item != "Vinagre" && item != "Lechuga") {
    //Si el filtrado retorna false, remueve el item
    return false;
  } else {
    return true;
  }
};

ensalada = ensalada.filter(quitarLechugaYVinagre);
console.log("Ensalada sin lechuga y vinagre");
console.log(ensalada);

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

/* Forma corta de filtrar**/

let ensalada = [
  "Uvas",
  "Vinagre",
  "Tomate",
  "Lechuga",
  "Piña",
  "Manzana",
  "Cebolla",
];

ensalada = ensalada.filter((item) => item != "Piña" && item != "Manzana");

/*
   
   item => item != 'Piña' && item != 'Manzana' 
   
   es lo mismo que escribir:
   
   (item) => {
       return item != 'Piña' && item != 'Manzana';
   }
   
   **/

console.log("Ensalada sin lechuga y vinagre");
console.log(ensalada);
