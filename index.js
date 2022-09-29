const express = require('express');
const categoriaController = require('./controller/CategoriaController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', categoriaController);

app.listen(8089, () =>{
    console.log("Rodando");
});