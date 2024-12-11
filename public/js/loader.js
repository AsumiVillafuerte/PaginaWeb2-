document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simula una carga
    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 3000); // 3 segundos para simular carga
});

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content-main").style.display = "block";
});
