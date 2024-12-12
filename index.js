const express = require('express'); // Llama al módulo 'express' para crear el servidor web.
const port = 3000; 
const mysql = require('mysql');
const mysql2 = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})



let connection;

async function initializeDatabase() {
    try {
        connection = await mysql2.createConnection({
            host: 'paginaweb.cq4ys72oaqco.us-east-1.rds.amazonaws.com',
            database: 'formulario',
            user: 'admin',
            password: 'asumi989806086'
        });
        console.log('Conectado a la base de datos de eventos.');
    } catch (error) {
        console.error('Error conectando a la base de datos de eventos: ' + error.stack);
    }
}

app.get('/evento1', async (req, res) => {
    const today = new Date().toISOString().split('T')[0];

    try {
        const [results] = await connection.query('SELECT evento,ods FROM fechas_importantes WHERE fecha = ?', [today]);

        if (results.length > 0) {
            const { evento, ods } = results[0];
            res.send(`Hoy es ${evento}, se celebra: ${ods}. (${evento})`);
        } else {
            res.send(`Hoy es ${today}, no hay eventos programados.`);
        }
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta: ' + error);
    }
});

async function startServer() {
    await initializeDatabase();
}

startServer();




/Formulario/

const conexion = mysql.createConnection({
    host: 'paginaweb.cq4ys72oaqco.us-east-1.rds.amazonaws.com',
    database: 'formulario',
    user: 'admin',
    password: 'asumi989806086'
});

conexion.connect((error) => {
    if (error) {
        console.log('Error conectando a la base de datos: ' + error.stack);
    } else {
        console.log('Conectado a la base de datos');
    }
});


app.post('/registro', (req, res) => {
    const { nombre, apellido, telefono, correo, consulta } = req.body;

    console.log('Datos recibidos:', req.body); // Verifica los datos recibidos

    if (!nombre || !apellido || !correo || !telefono || !consulta) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'INSERT INTO usuarios (Nombre, Apellido, Telefono, Correo,Consulta) VALUES (?, ?, ?, ? ,?)';
    conexion.query(query, [nombre, apellido, telefono, correo, consulta], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error al registrar el usuario' });
        } else {
            res.status(200).json({ message: 'Usuario registrado exitosamente' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server on port http://44.223.152.75:${port}`);
})