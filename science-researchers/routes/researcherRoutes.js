const express = require('express');
const Researcher = require('../models/Researcher');
const Article = require('../models/Article');

const router = express.Router();

router.get('/', async (req, res) => {
    const researchers = await Researcher.findAll({ include: 'articles' });
    res.json(researchers);
});

router.post('/', async (req, res) => {
    const researcher = await Researcher.create(req.body);
    res.status(201).json(researcher);
});

module.exports = router;
