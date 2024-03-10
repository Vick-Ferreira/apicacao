const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 3000;//Heroku

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

//ROTAS
const produtoRouter = require('./routes/produtoRoutes');
const adiminRouter = require('./routes/adiminRoutes');
const vendedorRouter = require('./routes/vendedorRoutes');
const carrinhoRouter = require('./routes/carrinhoRouter');

app.use('/produto', produtoRouter);
app.use('/adimin', adiminRouter);
app.use('/vendedor', vendedorRouter);
app.use('/carrinho', carrinhoRouter);

//conexão com o mongo
//mongodb+srv://vitoriaferreirap06:123456@cluster0.6puyj2y.mongodb.net/bancodaapi?retryWrites=true&w=majority
//ENTREGA UMA PORTA
//não quero iniciar a aplicação antes de se conectar com o banco de dados - conectando ao banco
const db_user = 'vitoria';
const db_password = encodeURIComponent('Romeu20');
mongoose
  .connect(`mongodb+srv://${db_user}:${db_password}@api.fajqg6b.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Conectou ao MongoDB");
  })
  .catch((err) => console.error(err));
  console.log("erro com o mongoose")

