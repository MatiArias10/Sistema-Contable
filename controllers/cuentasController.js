const connection = require('../config/db');

// Ver todas las cuentas
exports.getAllCuentas = (req, res) => {
    const query = 'SELECT * FROM Cuentas';
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

// Crear una nueva cuenta
exports.createCuenta = (req, res) => {
    const { Nombre, Tipo, Rubro } = req.body;
    const query = 'INSERT INTO Cuentas (Nombre, Tipo, Rubro, Saldo) VALUES (?, ?, ?, 0)';
    connection.query(query, [Nombre, Tipo, Rubro], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId });
        }
    });
};

// Modificar cuenta
exports.updateCuenta = (req, res) => {
    const { id } = req.params;
    const { Tipo } = req.body;
    const query = 'UPDATE Cuentas SET Tipo = ? WHERE ID_cuenta = ?';
    connection.query(query, [Tipo, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Cuenta actualizada' });
        }
    });
};

exports.getLibroMayor = (req, res) => {
    const query = 'SELECT * FROM LibroMayor'; // Ajusta la consulta según tu tabla
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getAsientos = (req, res) => {
    const query = 'SELECT * FROM Asientos'; // Cambia la consulta según tu estructura
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};
