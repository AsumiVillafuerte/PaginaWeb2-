<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    // Inicializar el mapa
    var map = L.map('map').setView([-13.0814585, -77.2534179], 15); // Coordenadas de Vallegrande, Cañete y nivel de zoom

    // Añadir capa de mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir un marcador en la ubicación del Instituto de Vallegrande
    L.marker([-13.0814585, -77.2534179]).addTo(map)
        .bindPopup("<b>Instituto Vallegrande, Cañete</b>")
        .openPopup();

  