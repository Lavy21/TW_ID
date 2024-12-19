const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conexiune la baza de date (PostgreSQL)
const sequelize = new Sequelize('postgres://postgres:Kari2103@localhost:5432/science_researchers', {
    logging: console.log, // Activează logurile SQL pentru debugging
});

// Verifica conexiunea la baza de date
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));

// Definirea modelelor
const Researcher = sequelize.define('Researcher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    field: {
        type: DataTypes.STRING,
    },
});

const Article = sequelize.define('Article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicationDate: {
        type: DataTypes.DATE,
    },
});

// Relatia parinte-copil (Researcher -> Articles)
Researcher.hasMany(Article, { as: 'articles' });
Article.belongsTo(Researcher, { foreignKey: 'researcherId' });

// Sincronizare baza de date (fortata pentru dezvoltare)
sequelize.sync({ force: true }) // Aceasta va sterge si recrea tabelele
    .then(() => console.log('Database synchronized successfully.'))
    .catch(error => console.error('Synchronization failed:', error));

// API Endpoints
app.get('/researchers', async (req, res) => {
    const researchers = await Researcher.findAll({ include: 'articles' });
    res.json(researchers);
});

app.post('/researchers', async (req, res) => {
    const researcher = await Researcher.create(req.body);
    res.status(201).json(researcher);
});

app.get('/articles', async (req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
});

app.post('/articles', async (req, res) => {
    const article = await Article.create(req.body);
    res.status(201).json(article);
});

// Pornire server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
