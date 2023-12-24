// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const NewsArticle = require('../models/NewsArticle');

// Fetch all news articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await NewsArticle.find({}, 'title author content');
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});
router.post('/add', async (req, res) => {
  try {
    const { title, author, content } = req.body;

    // Create a new NewsArticle instance
    const newArticle = new NewsArticle({
      title,
      author,
      content,
    });

    // Save the article to the database
    await newArticle.save();

    res.status(201).json({ message: 'Article added successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
