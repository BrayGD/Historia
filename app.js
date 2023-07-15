const botonElem = document.getElementById("boton-cambiar-cita");
const citaElem = document.getElementById("citas");
const autorElem = document.getElementById("autor");

let indiceActual = 0;

function cambiarCita() {
  citaElem.innerText = `${historias[indiceActual].texto}`;
  indiceActual++;
  if (indiceActual >= historias.length) {
    indiceActual = 0;
  }
}
  // Mostrar/ocultar botones según el índice actual
  

botonElem.addEventListener("click", cambiarCita);
cambiarCita(); // Llama a la función para mostrar la primera historia al cargar la página
