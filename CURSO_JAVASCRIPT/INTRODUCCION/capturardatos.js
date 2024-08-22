
function saludar() {
    // capturamos el valor de los inputs
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let edad = document.getElementById('edad').value
    alert(`hola soy ${nombre} ${apellido} y mi edad es : ${edad}`)
}