const express = require('express');
const app = express();
const port = 3001;
const livros = require('./livros.js');


app.use(express.json());
app.use('/livros', livros);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
