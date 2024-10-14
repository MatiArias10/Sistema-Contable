const connection = require('../config/db');

// Obtener todos los asientos (Libro Diario)
exports.getAllAsientos = (req, res) => {
    const query = 'SELECT * FROM Asientos';
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

// Crear un nuevo asiento
exports.createAsiento = (req, res) => {
    const { Fecha, Descripción, Debe, Haber, ID_cuenta_debe, ID_cuenta_haber } = req.body;
    const query = 'INSERT INTO Asientos (Fecha, Descripción, Debe, Haber, ID_cuenta_debe, ID_cuenta_haber) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [Fecha, Descripción, Debe, Haber, ID_cuenta_debe, ID_cuenta_haber], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId });
        }
    });
};

// Obtener el Libro Mayor
exports.getLibroMayor = (req, res) => {
    const query = `
    SELECT c.Nombre, SUM(a.Debe) AS Total_Debe, SUM(a.Haber) AS Total_Haber
    FROM Cuentas c
    LEFT JOIN Asientos a ON c.ID_cuenta = a.ID_cuenta_debe OR c.ID_cuenta = a.ID_cuenta_haber
    GROUP BY c.ID_cuenta`;
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};
