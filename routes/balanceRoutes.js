const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

// Rutas para los balances
router.get('/', balanceController.getBalance);

module.exports = router;
