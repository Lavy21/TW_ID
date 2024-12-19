const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Researcher = require('./Researcher');

const Article = sequelize.define('Article', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    publicationDate: { type: DataTypes.DATE },
});

Researcher.hasMany(Article, { as: 'articles' });
Article.belongsTo(Researcher);

module.exports = Article;
