const express = require('express');
const app = express();

app.get("/",(req,res) => {
    console.log("Funciona")
});

app.listen(8089, () =>{
    console.log("Rodando");
});