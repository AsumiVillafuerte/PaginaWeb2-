  

         function toggleSubContent(subHeader) {
            const subContent = subHeader.nextElementSibling;
            subContent.style.display = subContent.style.display === "none" ? "block" : "none";
        }
        
        window.addEventListener('scroll', function () {
            var proyectos = document.querySelector('.proyectos');

            // Obtener la posición de la ventana de visualización y la posición de la sección
            var scrollPosition = window.scrollY;
            var proyectosPosition = proyectos.offsetTop;

            // Si la sección "proyectos" está por encima de la ventana, aplicar un margen superior
            if (scrollPosition > proyectosPosition) {
                proyectos.style.marginTop = '20px'; // Ajusta el margen superior cuando se hace scroll
            } else {
                proyectos.style.marginTop = '0'; // Restablecer margen superior cuando está en su posición original
            }
        });
  
        