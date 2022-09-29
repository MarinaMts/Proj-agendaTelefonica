const Sequelize = require('sequelize');

const connection = new Sequelize(
    'BD_AGENDATELEFONICA',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;