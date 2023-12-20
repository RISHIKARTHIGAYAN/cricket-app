// In a separate script (e.g., insert-sample-articles.js)
const mongoose = require('mongoose');
const NewsArticle = require('./models/NewsArticle');
const sampleArticles = require('./sample-articles.json');

mongoose.connect('mongodb://localhost:27017/cric_01', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertSampleArticles() {
  try {
    await NewsArticle.insertMany(sampleArticles);
    console.log('Sample articles inserted successfully.');
  } catch (error) {
    console.error('Error inserting sample articles:', error);
  } finally {
    mongoose.disconnect();
  }
}

insertSampleArticles();
