// server.js
require('dotenv').config(); // Carrega as variáveis do .env

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Para processar dados de formulário

const app = express();
const port = process.env.PORT || 3000; // Porta que o servidor vai usar

// Middleware para processar corpos de requisição (formulários)
app.use(bodyParser.urlencoded({ extended: true }));

// Senha lida do arquivo .env
const correctPassword = process.env.ACCESS_PASSWORD;

// Rota para a página inicial (que vai pedir a senha)
app.get('/', (req, res) => {
    // Envia um formulário simples para o usuário digitar a senha
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Acesso Restrito</title>
            <style>
                body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f0f0; }
                .login-container { background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
                input[type="password"] { padding: 10px; margin: 15px 0; border: 1px solid #ccc; border-radius: 4px; }
                button { padding: 10px 20px; background-color: #ff8a6b; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease; }
                button:hover { background-color: #ff7a57; }
                .error { color: red; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class="login-container">
                <h2>Digite a senha para acessar</h2>
                <form action="/login" method="post">
                    <input type="password" name="password" placeholder="Senha" required>
                    <br>
                    <button type="submit">Acessar</button>
                    ${req.query.error ? '<p class="error">Senha incorreta!</p>' : ''}
                </form>
            </div>
        </body>
        </html>
    `);
});

// Rota para processar a senha submetida
app.post('/login', (req, res) => {
    const submittedPassword = req.body.password;

    if (submittedPassword === correctPassword) {
        // Se a senha estiver correta, redireciona para a página principal protegida
        res.redirect('/main'); // <-- Caminho de redirecionamento alterado para '/main'
    } else {
        // Se a senha estiver incorreta, redireciona de volta para a página de login com erro
        res.redirect('/?error=true');
    }
});

// Rota para servir a página principal (index.html) APENAS após o login
app.get('/main', (req, res) => { // <-- Rota alterada para '/main'
    // Nota: Em um sistema real, você precisaria verificar se o usuário passou pelo POST /login com sucesso (usando sessões, por exemplo)
    // antes de servir este arquivo. Para este exemplo simples, o redirecionamento após login é a única "proteção".
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Senha de acesso: ${correctPassword}`); // CUIDADO: Não logar senha em produção!
});