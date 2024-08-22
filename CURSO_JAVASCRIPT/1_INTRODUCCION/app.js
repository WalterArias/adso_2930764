// Definiciones:
/*
Javascript es un lenguaje interpretado (NO ES NECESARIO UN COMPILADOR)
Lenguaje de scripts (comandos linea por linea)
*/


// definicion de variables
// ATENCION !!!!!  Javascript define los tipos de datos por asignacion, es decir 
// tiene un tipado de datos débil

//definimos variables 
// forma uno usando la palabra reservada var
var edad = 10
// ECMA 6
let nombre = "Juancito Perez"
//constantes
const numeroPi = 3.1416  //opcional



// entradas de datos

// salidas de datos

//para programadores
console.log(edad)

// salida en el body del html
document.write(edad)
// salida en ventana flotante
window.alert(edad)


// salida en el body del html usando concatenadores
document.write("<br>" + "Hola mi nombre es : " + nombre + "y mi edad es : " + edad + 78)
//ecma 6  : usar esta ! literal expression o expresiones literales
document.write(`<br> hola mi nombre es:${nombre} y mi edad es:${edad}`)
