const connection = require('../config/db');

// Ver el libro diario
exports.getLibroDiario = (req, res) => {
    const query = `
    SELECT a.Fecha, a.Descripción, a.Debe, a.Haber, c.Nombre AS CuentaDebe, ch.Nombre AS CuentaHaber
    FROM Asientos a
    JOIN Cuentas c ON a.ID_cuenta_debe = c.ID_cuenta
    JOIN Cuentas ch ON a.ID_cuenta_haber = ch.ID_cuenta
    ORDER BY a.Fecha ASC
    `;
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

// Ver el libro mayor
exports.getLibroMayor = (req, res) => {
    const query = `
    SELECT c.Nombre AS Cuenta, SUM(a.Debe) AS TotalDebe, SUM(a.Haber) AS TotalHaber
    FROM Asientos a
    JOIN Cuentas c ON a.ID_cuenta_debe = c.ID_cuenta
    OR a.ID_cuenta_haber = c.ID_cuenta
    GROUP BY c.Nombre
    `;
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};
