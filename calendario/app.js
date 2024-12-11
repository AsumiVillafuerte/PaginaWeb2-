const express = require('express');
const mysql = require('mysql2/promise'); // Usamos mysql2 en modo promesas
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// Inicializar la conexión a la base de datos
let connection;
async function initializeDatabase() {
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root', 
            password: 'yolanda2422mateo', 
            database: 'calendario_aixa'  // Cambié el nombre de la base de datos
        });
        console.log('Conectado a la base de datos.');
    } catch (error) {
        console.error('Error conectando a la base de datos: ' + error.stack);
    }
}
// Ruta para obtener el evento del día
app.get('/evento', async (req, res) => {
    const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
    try {
        const [results] = await connection.query('SELECT titulo, descripcion FROM eventos WHERE fecha = ?', [today]);
        if (results.length > 0) {
            const { titulo, descripcion } = results[0];
            res.send(`Hoy es ${today}, se celebra: ${titulo}. ${descripcion}`);
        } else {
            res.send(`Hoy es ${today}, no hay eventos programados.`);
        }
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta: ' + error);
    }
});
// Iniciar el servidor después de inicializar la base de datos
async function startServer() {
    await initializeDatabase(); // Espera a que la base de datos se inicialice
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}
startServer(); // Inicia el servidor