// News.js
import React from 'react';

const News = ({ title, author}) => {
  return (
    <div className="news">
      
        <h3>{title}</h3>
        <p className="author">Author: {author}</p>
    </div>    
    
  );
};

export default News;
