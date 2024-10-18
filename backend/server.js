// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Para interpretar JSON no corpo das requisições

app.get('/api/atividades', (req, res) => {
  res.json([
    { id: 1, name: 'Corrida', distance: 5 },
    { id: 2, name: 'Ciclismo', distance: 15 },
  ]);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
