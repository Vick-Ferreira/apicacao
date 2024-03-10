const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do middleware express.static para servir arquivos estáticos
const frontendPath = path.join(__dirname, '../Frontend');
app.use(express.static(frontendPath));

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Seu aplicativo está rodando corretamente no Heroku!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
