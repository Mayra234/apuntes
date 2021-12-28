/*
 Preguntarle al usuario cuanto dinero tiene
 
 - Si la cantidad es menor o igual a 1000, debe imprimirse "No es posible otorgarte un crédito"
 - Si la cantidad es mayor a 1000 y menor a 4000, debe imprimirse "Tienes un crédito aprobado de " 
 + 2 veces la cantidad digitada
 - Si la cantidad es mayor a 4000 -> "Tienes un crédito de libre inversion de " + 4 veces la cantidad digitada
 */

const dinero = parseFloat(prompt("¿cuánto dinero tienes?"));

if (dinero <= 1000) {
  console.log("No es posible otorgarte un crédito");
} else if (dinero > 1000 && dinero < 4000) {
  console.log("Tienes un crédito aprobado de " + 2 * dinero);
} else if (dinero >= 4000) {
  console.log("Tienes un crédito de libre inversión de" + 4 * dinero);
}


