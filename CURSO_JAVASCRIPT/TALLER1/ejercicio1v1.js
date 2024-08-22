// usamos el document prompt para hacer el ingreso de datos

// entrada de datos

let numero = prompt('Ingrese el numero para calcular cuadrado y cubo')
// serializacion o parseo de los datos ingresados (los formulario capturan solo texto)
numero = parseFloat(numero)  // parseInt: entero  parseFloat decimal
//let numero = parseFloat(prompt('Ingrese el numero para calcular cuadrado y cubo')) // otra forma más directa


// operaciones
let cuadrado = numero * numero
let cubo = numero * numero * numero

//usamos libreria de js  : Math  --- potencia   Math.pow(base,exponente)
// refactoring

let cuadrado2 = Math.pow(numero, 2)
let cubo2 = Math.pow(numero, 3)



// salida del algoritmo a la consola del navegador

console.log(`Para el numero ${numero} su cuadrado es: ${cuadrado2} y el cubo: ${cubo2}`) //
console.log('Para el numero' + numero + ' su cuadrado es:' + cuadrado2 + ' y el cubo:' + cubo2)


// escribiendolo en el body del html
document.write(`Para el numero ${numero} su cuadrado 
     es:<b> ${cuadrado2} </b> y el cubo: <b> ${cubo2}</b>`)

// con ventana flotante
alert(`Para el numero ${numero} su cuadrado
    es:<b> ${cuadrado2} </b> y el cubo: <b> ${cubo2}</b>`)