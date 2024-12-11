

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el loader al cargar la página
    document.getElementById("loader").style.display = "block";

    // Simulando un retraso para mostrar el loader
    setTimeout(() => {
        // Ocultar el loader
        document.getElementById("loader").style.display = "none";
        // Mostrar el contenido
        document.getElementById("content").style.display = "block";
    }, 2000); // Cambia este valor para ajustar el tiempo de carga

});
function toggleHamburgerMenu() {
            const menuHamburger = document.getElementById('menuHamburger');
            menuHamburger.classList.toggle('active');
        }