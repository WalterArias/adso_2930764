function sumar() {

    // capturamos datos del formulario

    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value

    // serializar, parsear transformar el tipo
    /* numero1 = parseInt(numero1) // transforma en numero entero el valor del input
    numero2 = parseInt(numero2) */
    numero1 = parseFloat(numero1) // transforma en numero decimal el valor del input
    numero2 = parseFloat(numero2)

    // operacion y resultado
    let suma = numero1 + numero2

    //salida de la funcion

    alert(`la suma de ${numero1} más ${numero2} es : ${suma}`)


}