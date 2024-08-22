// funcion que escribe el numero 7 en el input principal

let total = document.getElementById("total")
function escribir7() {
    // escribo en el valor del input html el numero 7 concatenando para no sobreescribir
    return total.value += 7
}
function escribirSignoMas() {
    return total.value += '+'
}
function escribir8() {
    return total.value += 8
}

function borrar() {
    return total.value = " "
}

function calcular() {
    //usamos la funcion eval() evalua una expresion matematica, JS 
    let resultado = eval(total.value)
    return total.value = resultado
}