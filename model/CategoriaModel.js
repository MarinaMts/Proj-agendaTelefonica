const Sequelize = require('sequelize');

const connection = require ('../database/database');

const Categoria = connection.define(
    'TB_CATEGORIA',
    {
        NOME_CATEGORIA:{
            allowNull: false,
            type: Sequelize.STRING(45)
        }
    }
);

//Categoria.sync({force:true});

module.exports = Categoria;