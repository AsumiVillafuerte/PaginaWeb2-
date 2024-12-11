// Selecciona todos los botones desplegables
const botonesDesplegables = document.querySelectorAll('.botonDesplegable');

botonesDesplegables.forEach(boton => {
    boton.addEventListener('click', () => {
        // Alterna el desplegable de cada botón
        const contenido = boton.nextElementSibling;
        contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';
    });
});
