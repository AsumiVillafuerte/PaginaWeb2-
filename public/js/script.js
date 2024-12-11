let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carrusel-item');
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }
    document.querySelector('.carrusel-inner').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Inicia el carrusel
showSlide(index);

//menu 
 
        function toggleHamburgerMenu() {
            const menuHamburger = document.getElementById('menuHamburger');
            menuHamburger.classList.toggle('active');
        }

