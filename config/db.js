// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root', // Reemplaza 'tu_usuario' por tu usuario real de MySQL
    password: process.env.DB_PASSWORD || '', // Reemplaza 'tu_contraseña' por tu contraseña real de MySQL
    database: process.env.DB_NAME || 'contable' // Reemplaza 'nombre_de_tu_base_de_datos' por el nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

module.exports = connection;
