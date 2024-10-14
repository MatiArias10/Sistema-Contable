const express = require('express');
const router = express.Router();
const asientosController = require('../controllers/asientosController');

// Rutas
router.get('/', asientosController.getAllAsientos); // Ver todos los asientos (Libro Diario)
router.post('/', asientosController.createAsiento); // Crear un nuevo asiento
router.get('/libro-mayor', asientosController.getLibroMayor); // Obtener Libro Mayor

module.exports = router;
