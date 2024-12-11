document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("loader").style.display = "block";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 2000);

        const button1 = document.getElementById("button1");
        const videos1 = document.getElementById("videos1");
        button1.addEventListener("click", function () {
            videos1.classList.toggle("hidden");
            button1.textContent = videos1.classList.contains("hidden") ? "Mostrar más videos" : "Ocultar videos";
        });

        const secondRowCards = document.querySelector('.segundo');
        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener("click", function () {
            secondRowCards.style.display = (secondRowCards.style.display === 'none' || secondRowCards.style.display === '') ? 'flex' : 'none';
            toggleButton.textContent = (secondRowCards.style.display === 'flex') ? 'Ver menos' : 'Ver más';
        });

        const tercero = document.querySelector('.tercero');
        const toggleButton3 = document.getElementById('toggleButton3');
        toggleButton3.addEventListener("click", function () {
            tercero.style.display = (tercero.style.display === 'none' || tercero.style.display === '') ? 'flex' : 'none';
            toggleButton3.innerText = (tercero.style.display === 'flex') ? 'Ver menos' : 'Ver más';
        });
    });
