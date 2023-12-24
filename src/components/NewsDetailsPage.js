// NewsDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetailsPage = ({ newsArticles }) => {
  const { newsId } = useParams();
  console.log(JSON.stringify(newsId));
  const news = newsArticles.find((item) => JSON.stringify(item._id) ===JSON.stringify(newsId));
  console.log('newsd',newsArticles);
  if (!news) {
    return <p>News not found.</p>;
  }

  return (
    <div>
      <h2>{news.title}</h2>
      <p>Author: {news.author}</p>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetailsPage;
