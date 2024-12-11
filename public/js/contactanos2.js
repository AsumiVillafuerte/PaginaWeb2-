document.addEventListener('DOMContentLoaded', () => {
    // SECCIÓN 1: MAPA INTERACTIVO
    const map = L.map('map').setView([-13.072289, -76.378877], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
        {
            name: "Instituto Valle Grande",
            coords: [-13.08160002342073, -76.38769939165869],
            description: "Antigua Panamericana Sur Km 144, San Vicente de Cañete 15701",
            img: "/imagenes/valle.png"
        },
        {
            name: "Hospital Regional de Cañete Rezola",
            coords: [-13.062122113903317, -76.42912793153847],
            description: "WHQC+38F, San Luis de Cañete 15720",
            img: "/imagenes/rezola.jpeg"
        },
        {
            name: "Hospital II Cañete - Essalud",
            coords: [-13.075298042279172, -76.38004308632394],
            description: "WJF9+MGR, Av. Mariscal Benavides 495, San Vicente de Cañete 15701",
            img: "/imagenes/essasalud.png"
        },
        {
            name: "CENTRO MATERNO INFANTIL RAMOS LARREA",
            coords: [-13.057560920254678, -76.35541864362001],
            description: "WJRV+WRG, Imperial 15701",
            img: "/imagenes/materno.avif"
        },
        {
            name: "Centro de Salud Nuevo Imperial",
            coords: [-13.077128210121415, -76.3175680046393],
            description: "Miraflores 163, Nuevo Imperial 15723",
            img: "/imagenes/saludNuevo.JPG"
        },
        {
            name: "Posta De Sanidad PNP-CAÑETE",
            coords: [-13.074984521835033, -76.31638616360564],
            description: "Carr. Cañete Yauyos 148A, Nuevo Imperial 15723",
            img: "/imagenes/poli.jpg"
        },
        {
            name: "Clínica Virgen del Carmen",
            coords: [-13.067164669749534, -76.3607713583815],
            description: " Rezola, San Vicente de Cañete 15701",
            img: "/imagenes/clinicaCarme .jpg"
        },
        {
            name: "Inkamay Salud Cañete",
            coords: [-13.074273716583194, -76.37391411989671],
            description: "av. Benavides s/n (frente al mega plaza, San Vicente de Cañete",
            img: "/imagenes/inkamay.jpg"
        },
        {
            name: "Centro de Salud San Vicente Cañete",
            coords: [-13.074020443759913, -76.36630743762188],
            description: "Av. Mariscal Benavides 295, San Vicente de Cañete 15701",
            img: "/imagenes/hospitalvicente.jpg"
        },
    ];

    locations.forEach(location => {
        const marker = L.marker(location.coords).addTo(map);
        marker.bindPopup(`
            <strong>${location.name}</strong><br>
            ${location.description}<br>
            <img src="${location.img}" alt="${location.name}" style="width: 100%; height: auto;">
        `);
    });

    // SECCIÓN 2: PREGUNTAS FRECUENTES (FAQ)
    const faqButtons = document.querySelectorAll('.faq-pregunta');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const answer = button.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // SECCIÓN 3: VALIDACIONES DEL FORMULARIO
    const questions = [
        { question: "¿Cuál es tu nombre completo?", type: "text", validation: value => value ? (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value) || "El nombre no debe contener números ni símbolos.") : "Por favor, ingrese los datos." },
        { question: "¿Cuál es tu apellido completo?", type: "text", validation: value => value ? (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value) || "El apellido no debe contener números ni símbolos.") : "Por favor, ingrese los datos." },
        { question: "¿Cuál es tu Gmail?", type: "text", validation: value => value ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Por favor, ingresa un Gmail válido.") : "Por favor, ingrese los datos." },
        { question: "¿Cuál es tu número de teléfono?", type: "text", validation: value => value ? (/^\d{9}$/.test(value) || "El teléfono debe contener exactamente 9 números.") : "Por favor, ingrese los datos.", restrictInput: /^[0-9]{0,9}$/ },
        { question: "¿Cuál es tu edad?", type: "number", validation: value => value ? ((value >= 18 && value <= 100) || "La edad debe estar entre 18 y 100 años.") : "Por favor, ingrese los datos." },
        { question: "¿Cuál es tu sexo?", type: "select", validation: value => value ? (value !== "" || "Por favor, selecciona tu sexo.") : "Por favor, ingrese los datos." },
        {
            question: "¿Cuál es tu consulta?",
            type: "text",
            validation: value => value ? (/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,?!]+$/.test(value) || "La consulta solo puede contener letras, números, espacios y signos de puntuación básicos.") : "Por favor, ingrese los datos."
        }
    ];

    const responses = [];
    let currentQuestionIndex = 0;

    const questionElement = document.getElementById("question");
    const inputField = document.getElementById("inputField");
    const selectField = document.getElementById("selectField");
    const numberField = document.getElementById("numberField");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    const homeButton = document.getElementById("homeButton");
    const errorMessage = document.getElementById("errorMessage");
    const backToStartButton = document.getElementById("backToStartButton");

    const fields = {
        text: inputField,
        select: selectField,
        number: numberField
    };

    function updateQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        Object.values(fields).forEach(field => {
            field.style.display = "none";
            field.removeEventListener("input", restrictInputHandler);
        });

        const currentField = fields[currentQuestion.type];
        currentField.style.display = "block";
        currentField.value = responses[currentQuestionIndex] || "";

        prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
        errorMessage.style.display = "none";

        if (currentQuestion.restrictInput) {
            currentField.addEventListener("input", restrictInputHandler);
        }
    }

    function restrictInputHandler(event) {
        const currentQuestion = questions[currentQuestionIndex];
        event.target.value = event.target.value.match(currentQuestion.restrictInput)?.[0] || "";
    }

    nextButton.addEventListener("click", () => {
        const currentQuestion = questions[currentQuestionIndex];
        const field = fields[currentQuestion.type];
        const response = field.value.trim();
        const validation = currentQuestion.validation;

        if (validation(response) === true) {
            responses[currentQuestionIndex] = response;
            field.value = "";
            errorMessage.style.display = "none";

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                updateQuestion();
            } else {
                questionElement.textContent = "¡Gracias por completar el formulario!";
                Object.values(fields).forEach(field => field.style.display = "none");
                nextButton.style.display = "none";
                prevButton.style.display = "none";
                homeButton.style.display = "inline-block";
            }
        } else {
            errorMessage.textContent = validation(response);
            errorMessage.style.display = "block";
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuestion();
        }
    });

    homeButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        responses.length = 0;
        updateQuestion();
        nextButton.style.display = "inline-block";
        homeButton.style.display = "none";
    });

    backToStartButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        responses.length = 0;
        updateQuestion();
        nextButton.style.display = "inline-block";
        homeButton.style.display = "none";
    });

    updateQuestion();
});









