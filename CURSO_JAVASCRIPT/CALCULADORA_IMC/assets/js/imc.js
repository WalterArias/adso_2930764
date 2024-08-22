'use strict'
let resultado = document.getElementById('resultado')
function calcularImc() {
    // capturamos valores ingresados en los inputs
    let peso = document.getElementById('peso').value
    let estatura = document.getElementById('estatura').value
    //serializar/parsear
    peso = parseFloat(peso)
    estatura = parseFloat(estatura)

    //calcular
    let imc = peso / Math.pow(estatura, 2)
    // pintar la imagen de acuerdo al rango

    if (imc >= 18.5 && imc <= 24.9) {        
        return resultado.innerHTML = `<h1>hfhhffh</h1> 
        <br>
        <img src="./assets/img/ok.png">`
    }
    
    if (imc >= 25 && imc <= 29.9) {
        return resultado.innerHTML = `<img src="./assets/img/mal.png">`
    }
    if (imc > 30) {
        return resultado.innerHTML = `<img src="./assets/img/sobre.png">`
    }
}

