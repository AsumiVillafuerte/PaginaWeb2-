document.getElementById('registroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombre :document.getElementById('nombre').value.trim(),
        apellido : document.getElementById('apellido').value.trim(),
        telefono : document.getElementById('telefono').value.trim(),
        correo : document.getElementById('correo').value.trim(),
        consulta : document.getElementById('consulta').value.trim(),
    };


    console.log('Datos enviados:', formData);

    try {
        const response = await fetch('http://44.223.152.75:3000/registro', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar los datos.');
    }
});