//operadores 
// matematicos  + - / * %
let numero1 = 120
let numero2 = 100
let numero3 = 45
let numero4 = 23
let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2  // cociente de la division
let modulo = numero1 % numero2 // residuo de la division

// salidas

console.log(suma, resta, multiplicacion, division, modulo)

// comparación  > >= < <= == === != !==

let expresionSimple = numero1 === numero2  //contenidos


//console.log(expresion)

// logicos o booleanos  and or not
// y en javascript &&
// ejemplo usando -y-
let expresionCompuesta = (numero1 > numero2) && (numero3 > numero4) && (numero1 > numero3)
console.log(expresionCompuesta)

//ejemplo usando -or-
let expresionCompuesta2 = (numero1 > numero2) || (numero2 > numero1) || (numero1 > numero3)
console.log(expresionCompuesta2)