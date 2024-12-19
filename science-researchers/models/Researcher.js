const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Researcher = sequelize.define('Researcher', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    field: { type: DataTypes.STRING },
});

module.exports = Researcher;
