const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

// Rutas
router.get('/', cuentasController.getAllCuentas);   // Ver todas las cuentas
router.post('/', cuentasController.createCuenta);   // Crear una nueva cuenta
router.put('/:id', cuentasController.updateCuenta); // Modificar cuenta
router.get('/balance', cuentasController.getBalance);  // Balance de cuentas
router.get('/activos', cuentasController.getActivosPorRubro); // Activos por rubro

// Añadir la ruta para el libro mayor
router.get('/libro-mayor', cuentasController.getLibroMayor); // Suponiendo que tienes esta función

module.exports = router;
