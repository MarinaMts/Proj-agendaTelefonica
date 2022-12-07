const express = require('express');
const categoriaController = require('./controller/CategoriaController');
const contatoController = require('./controller/ContatoController');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', categoriaController);
app.use('/', contatoController);

app.listen(3000, () =>{
    console.log("Rodando");
});