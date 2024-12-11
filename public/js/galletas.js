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


function validarFormulario() {

    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorTelefono").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorCantidad").innerHTML = "";
    document.getElementById("errorFecha").innerHTML = "";

    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();
    var cantidad = document.getElementById("cantidad").value.trim();
    var fechaEntrega = document.getElementById("calendario").value;

    // Validación 
    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML = "El nombre es obligatorio.";
        return false;
    }

    var Telefono = /^[0-9]{9}$/;
    if (!Telefono.test(telefono)) {
        document.getElementById("errorTelefono").innerHTML = "El teléfono debe contener 9 dígitos.";
        return false;
    }

    var Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email.test(email)) {
        document.getElementById("errorEmail").innerHTML = "Ingresa un correo electrónico válido.";
        return false;
    }

    if (cantidad === "" || parseInt(cantidad) <= 0) {
        document.getElementById("errorCantidad").innerHTML = "La cantidad debe ser al menos 1.";
        return false;
    }

    if (fechaEntrega === "") {
        document.getElementById("errorFecha").innerHTML = "La fecha de entrega es obligatoria.";
        return false;
    }

    // Si todo está correcto
    alert("¡Pedido realizado con éxito!");
    return true;
}
});

//menu//
function toggleHamburgerMenu() {
            const menuHamburger = document.getElementById('menuHamburger');
            menuHamburger.classList.toggle('active');
        }
