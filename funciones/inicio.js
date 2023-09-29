function calcularDiasPasados() {
    var fechaActual = new Date();
    var fechaSeptiembre = new Date(fechaActual.getFullYear(), 7, 13);
    var diferenciaMilisegundos = fechaActual - fechaSeptiembre;
    var diasPasados = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    return diasPasados;
}
// Llama a la función y muestra el resultado en el div con id "resultado"
var diasTranscurridos = calcularDiasPasados();
var resultadoDiv = document.getElementById("resultado");
resultadoDiv.textContent = "Han pasado " + diasTranscurridos + " días desde que estamos juntos <3.";
