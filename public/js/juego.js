function mostrarRespuesta() {
    // Obtener el elemento de la respuesta
    var respuesta = document.getElementById('respuesta');
    
    // Comprobar si la respuesta está oculta
    if (respuesta.classList.contains('oculto')) {
        // Si está oculta, mostrarla
        respuesta.classList.remove('oculto');
        respuesta.classList.add('mostrar');  // Agregar la clase mostrar
    } else {
        // Si ya está visible, ocultarla
        respuesta.classList.remove('mostrar');
        respuesta.classList.add('oculto');  // Volver a ocultarla
    }
}
