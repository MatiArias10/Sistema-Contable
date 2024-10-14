const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Rutas para libro diario y mayor
router.get('/diario', libroController.getLibroDiario);
router.get('/mayor', libroController.getLibroMayor);

module.exports = router;
