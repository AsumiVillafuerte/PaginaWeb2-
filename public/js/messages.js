document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el loader al cargar la página
    document.getElementById("loader").style.display = "block";

    // Simulando un retraso para mostrar el loader
    setTimeout(() => {
        // Ocultar el loader
        document.getElementById("loader").style.display = "none";
        // Mostrar el contenido
        document.getElementById("content").style.display = "block";
    }, 2000); // Cambia este valor para ajustar el tiempo de carga


// messages.js
window.onload = function() {
  var typed = new Typed(".mensaje", {
      strings: [
          "Por un futuro más saludable para todos", 
          "Cuidemos nuestra salud, protejamos nuestro planeta", 
          "Salud y bienestar, el pilar del desarrollo sostenible", 
          "Cuidar la salud es cuidar el futuro"
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true
  });
};

});
