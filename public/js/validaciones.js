function validaciones() {
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const telefonoInput = document.getElementById("telefono");
    const correoInput = document.getElementById("correo");
   

    const errorNombre = document.getElementById("error-nombre");
    const errorapellido = document.getElementById("error-apellido");
    const errorCorreo = document.getElementById("error-correo");
    const errorTelefono = document.getElementById("error-telefono");

    // Validar el campo de nombre
    nombreInput.addEventListener("input", () => {
        const nombre = nombreInput.value.trim();
        const regexNombre = /^[A-Za-zÁ-Úá-úÑñ\s]+$/;
        if (nombre && !regexNombre.test(nombre)) {
            errorNombre.textContent = "Solo se permiten letras en el nombre.";
            errorNombre.style.display = "block";
        } else {
            errorNombre.style.display = "none";
        }
        toggleSubmitButton(); // Actualizar el estado del botón
    });

    apellidoInput.addEventListener("input", () => {
        const apellido = apellidoInput.value.trim();
        const regexapellido = /^[A-Za-zÁ-Úá-úÑñ\s]+$/;
        if (apellido && !regexapellido.test(apellido)) {
            errorapellido.textContent = "Solo se permiten letras en el apellido.";
            errorapellido.style.display = "block";
        } else {
            errorapellido.style.display = "none";
        }
        toggleSubmitButton(); // Actualizar el estado del botón
    });

    // Validar el campo de teléfono
    telefonoInput.addEventListener("input", () => {
        let telefono = telefonoInput.value.trim();

        // Limitar a 9 caracteres
        if (telefono.length > 9) {
            telefono = telefono.slice(0, 9);  // Limitar a 9 caracteres
        }

        // Actualizar el valor en el input
        telefonoInput.value = telefono;

        // Verificar que el teléfono tenga 9 caracteres y empiece con "9"
        if (telefono.length !== 9) {
            errorTelefono.textContent = "El número debe tener exactamente 9 dígitos.";
            errorTelefono.style.display = "block";
        } else if (!telefono.startsWith("9")) {
            errorTelefono.textContent = "El número debe comenzar con '9'.";
            errorTelefono.style.display = "block";
        } else {
            errorTelefono.style.display = "none";
        }

        telefonoInput.addEventListener("keydown", (event) => {
            // Permitir solo números (0-9) y la tecla de retroceso (Backspace) para borrar
            if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault(); // Bloquear la tecla si no es un número
            }
        });

        toggleSubmitButton(); // Actualizar el estado del botón
    });

    // Validar el campo de correo
    correoInput.addEventListener("input", () => {
        const correo = correoInput.value.trim();
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@(vallegrande\.edu\.pe|hotmail\.com|gmail\.com)$/;
        if (correo && !regexCorreo.test(correo)) {
            errorCorreo.textContent = "El correo debe ser @vallegrande.edu.pe, @hotmail.com o @gmail.com.";
            errorCorreo.style.display = "block";
        } else {
            errorCorreo.style.display = "none";
        }
        toggleSubmitButton(); // Actualizar el estado del botón
    });

    

    // Deshabilitar el botón al cargar la página si hay errores
    toggleSubmitButton();
}

validaciones();