
  function calcularBeneficios() {
    // Obtener los valores de los campos
    const edad = parseInt(document.getElementById('edad').value);
    const actividad = document.getElementById('actividad').value.toLowerCase();
    
    // Comprobar si los valores son válidos
    if (isNaN(edad) || edad <= 0) {
      alert("Por favor, ingresa una edad válida.");
      return;
    }
    
    if (actividad !== 'bajo' && actividad !== 'medio' && actividad !== 'alto') {
      alert("Por favor, ingresa un nivel de actividad válido (Bajo, Medio, Alto).");
      return;
    }

    // Lógica simple para calcular beneficios
    let beneficios = "Tus beneficios estimados son:\n";
    
    // Cálculos basados en la edad y actividad
    if (edad < 18) {
      beneficios += "- Tus necesidades de hierro y proteínas son altas para apoyar el crecimiento y la energía.";
    } else if (edad >= 18 && edad <= 25) {
      beneficios += "- Necesitas un impulso extra para mantener la energía y combatir la fatiga.";
    } else {
      beneficios += "- La salud y el bienestar deben ser tu prioridad, nuestras galletas pueden ayudarte a mantener tus niveles de energía.";
    }

    // Beneficios adicionales dependiendo del nivel de actividad
    if (actividad === 'bajo') {
      beneficios += "\n- Como tu nivel de actividad es bajo, las galletas te ayudarán a mantener energía sin sobrecargar tu cuerpo.";
    } else if (actividad === 'medio') {
      beneficios += "\n- Las galletas serán una excelente fuente de energía para tus actividades cotidianas.";
    } else if (actividad === 'alto') {
      beneficios += "\n- Necesitarás un refuerzo de energía para mantenerte activo durante el día. ¡Nuestras galletas son perfectas para ti!";
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = beneficios;
  }

