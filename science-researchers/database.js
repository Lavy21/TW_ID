const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:Kari2103@localhost:5432/science_researchers', {
    dialect: 'postgres',
});

module.exports = sequelize;
