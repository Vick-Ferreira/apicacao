// Importando os pacotes necessários
const express = require('express');

// Inicializando o servidor Express
const app = express();

// Definindo uma rota de exemplo
app.get('/', (req, res) => {
    res.send('Backend rodando na porta 3000');
});

// Iniciando o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});
