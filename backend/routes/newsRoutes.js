// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const NewsArticle = require('../models/NewsArticle');

// Fetch all news articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await NewsArticle.find({}, 'title author');
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
