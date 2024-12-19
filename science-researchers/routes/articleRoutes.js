const express = require('express');
const Article = require('../models/Article');

const router = express.Router();

router.get('/', async (req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
});

router.post('/', async (req, res) => {
    const article = await Article.create(req.body);
    res.status(201).json(article);
});

module.exports = router;
