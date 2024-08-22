//perimetro y superficie de un cuadrado
// perimetro de un cuadrado = suma de sus lados
// superficie : lado por lado ó lado elevado a la dos

// entrada

let lado = parseFloat(prompt('Ingrese el lado del cuadrado'))


// procesos

let perimetro = lado + lado + lado + lado
let superficie = Math.pow(lado, 2)

// salida

document.write(`el perimetro del cuadrado es: ${perimetro} y la superficie es: ${superficie.toFixed(2)}`)