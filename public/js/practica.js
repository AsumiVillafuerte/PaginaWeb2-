const imagenesCarrusel = document.querySelector('.ImagenesCarrusel');
const botonIzquierda = document.querySelector('.BotonIzquierda');
const botonDerecha = document.querySelector('.BotonDerecha');

let indice = 0;
const cantidadImagenes = document.querySelectorAll('.ImagenCarrusel').length;
let intervalo = setInterval(moverAutomatico, 3000);
let bloqueado = false; // Bloqueo para evitar múltiples clics rápidos

// Mover el carrusel automáticamente cada 3 segundos
function moverAutomatico() {
    if (!bloqueado) {
        indice = (indice + 1) % cantidadImagenes;
        actualizarCarrusel();
    }
}

// Actualizar posición del carrusel
function actualizarCarrusel() {
    bloqueado = true; // Bloqueo activado
    const desplazamiento = -(indice * 100);
    imagenesCarrusel.style.transform = `translateX(${desplazamiento}%)`;
    setTimeout(() => {
        bloqueado = false; // Se desbloquea al finalizar la transición
    }, 800); // Duración de la transición (debe coincidir con el CSS)
}

// Mover hacia la izquierda
botonIzquierda.addEventListener('click', () => {
    if (!bloqueado) {
        clearInterval(intervalo);
        indice = (indice - 1 + cantidadImagenes) % cantidadImagenes;
        actualizarCarrusel();
        intervalo = setInterval(moverAutomatico, 3000);
    }
});

// Mover hacia la derecha
botonDerecha.addEventListener('click', () => {
    if (!bloqueado) {
        clearInterval(intervalo);
        indice = (indice + 1) % cantidadImagenes;
        actualizarCarrusel();
        intervalo = setInterval(moverAutomatico, 3000);
    }
});
