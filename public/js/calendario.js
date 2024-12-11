fetch('http://44.223.152.75:3000/evento1')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(data => {
    const eventoDiv = document.getElementById('dateMessage');
    eventoDiv.innerText = data;
})
.catch(error => {
    console.error('Error al obtener el evento:', error);
    document.getElementById('dateMessage').innerText = 'No se pudo cargar el evento del día.';
    });

