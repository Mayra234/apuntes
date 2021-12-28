//Tipos de datos primitivos en Javascript
/*
   1. string -> textos. Deben envolverse en comillas, pueden ser dobles o sencillas. O 
   también se pueden envolver en plantillas literales (template literals / backticks).
   */
const nombre1 = "Juan"; //string
const nombre2 = "Angelica"; //string
const nombre3 = `Mayra`; //string
const numeroEnString = "89"; //string

/*
   2. number -> números enteros (negativos y positivos, cero) y decimales.
   - Investigar el concepto de coherción
   */
const numero1 = 89; //number
const numero2 = 89.2; //number
const numero3 = 10 / 2; //number
const numero4 = numero1 + numero2; //number
const numero5String = "8" + 8; //string
const potencia = Math.pow(2, 2); //number
const raiz = Math.sqrt(64); //number

/*
   3. boolean -> true y false -> nos sirven para hacer interruptores (banderas)
   --> Qué es una bandera en programación.
   */

/*
   Tabla para el y (&&)
   V y V = V
   V y F = F
   F y V = F
   F y F = F
   
   Tabla para el o (||)
   V o V = V
   V o F = V
   F o V = V
   F o F = F
   */

const flag1 = true; //boolean
const flag2 = false; //boolean
const flag3 = true && true; //true -> boolean
const flag4 = true && false; //false -> boolean
const flag5 = true || false; //true -> boolean

/*
   4. undefined -> Tipo de dato indefinido
   */
const valorIndefinido = undefined; //undefined;

/*
   5. null -> Tipo de dato object
   */
const valorNulo = null; //object;

/*
   6. array --- Ver a futuro
   */

/*
   7. object --- Ver a futuro
   */

/*Comprobación de tipos de datos primitivos
  	Se utiliza el método o función typeof de javascript
    -> Investigar qué es un método en Javascript.
  */
const ejemploNumero = 1;
console.log("ejemploNumero", typeof ejemploNumero); //number

const ejemploString = "1";
console.log("ejemploString", typeof ejemploString); //string

const ejemploBoolean = true;
console.log("ejemploBoolean", typeof ejemploBoolean); //boolean

const ejemploX = "true";
console.log("ejemploX", typeof ejemploX); //string

const ejemploNulo = null;
console.log("ejemploNulo", typeof ejemploNulo); //null

const ejemploUndefined = undefined;
console.log("ejemploUndefined", typeof ejemploUndefined); //undefined

//Sesión del martes:
/*
   	- Condicionales if, else
   	- Switch case
   */

//Investigar el método split de los arrays
