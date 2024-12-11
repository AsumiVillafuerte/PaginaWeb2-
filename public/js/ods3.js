// Función para mostrar el banner de cookies después de 10 segundos
setTimeout(() => {
  document.getElementById('cookieBanner').style.display = 'block';
}, 10000); // 10 segundos

// Función para aceptar cookies
function acceptCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
  // Aquí podrías agregar la lógica para guardar la preferencia de cookies
}

// Función para rechazar cookies
function rejectCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
  // Aquí podrías agregar la lógica para guardar la preferencia de cookies
}

// Función para configurar cookies
function configCookies() {
  alert("Abrir opciones de configuración de cookies");
}