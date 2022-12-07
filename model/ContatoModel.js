const Sequelize = require("sequelize");

const connection = require("../database/database");

const Categoria = require('./CategoriaModel');

const Contato = connection.define(
    "TB_CONTATOS",
    {
        NOME_CONTATO:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        TEL_CONTATO:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        APELIDO:{
            type: Sequelize.STRING(45),
            allowNull: true
        },
        EMAIL_CONTATO:{
            type: Sequelize.STRING(60),
            allowNull: true
        }
    }
);

Categoria.hasMany(Contato, {
    foreignKey: 'ID_CATEGORIA_CONTATO'
});

Contato.belongsTo(Categoria);


//Contato.sync({force:true});

module.exports = Contato;
