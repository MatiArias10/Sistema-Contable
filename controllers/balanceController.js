const connection = require('../config/db');

// Balance de cuentas al cierre
exports.getBalance = (req, res) => {
    const query = `
    SELECT 'Activos' AS Tipo, Nombre, Saldo
    FROM Cuentas WHERE LEFT(ID_cuenta, 1) = '1'
    UNION ALL
    SELECT 'Pasivos' AS Tipo, Nombre, Saldo
    FROM Cuentas WHERE LEFT(ID_cuenta, 1) = '2'
    UNION ALL
    SELECT 'Patrimonio Neto' AS Tipo, Nombre, Saldo
    FROM Cuentas WHERE LEFT(ID_cuenta, 1) = '3'
    `;
    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};
