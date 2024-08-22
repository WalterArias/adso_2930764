//suma de dos numeros


//entradas

//let numero1 = parseInt(prompt('ingrese el numero 1'))
let numero1 = prompt('ingrese el numero 1')
let numero2 = prompt('ingrese el numero 2')

//serializamos los datos capturados -parsear-
//numero1 = parseFloat(numero1) //serializa en punto flotante, decimales//
numero1 = parseInt(numero1)  //serializando a entero
numero2 = parseInt(numero2)



//proceso

let sumar = numero1 + numero2

//salida

console.log('la suma de los numeros ' + numero1 + " mas el " + numero2 + " = " + sumar)
//literal expression con backtiscks 
console.log(`la suma de los numeros ${numero1} mas el ${numero2} = ${sumar}`)

document.write(`la suma de los numeros ${numero1} mas el ${numero2} = ${sumar}`)