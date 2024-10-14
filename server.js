const express = require('express');
const cuentasRoutes = require('./routes/cuentasRoutes');
const asientosRoutes = require('./routes/asientosRoutes'); // Importar rutas de asientos
const libroRoutes = require('./routes/libroRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
require('dotenv').config();
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/cuentas', cuentasRoutes);
app.use('/api/asientos', asientosRoutes); // Usar las rutas de asientos
app.use('/api/libro',libroRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
