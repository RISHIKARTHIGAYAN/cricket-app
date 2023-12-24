// News.js
import React from 'react';
import './News.css'
const News = ({ title, author}) => {
  return (
  <div class="container">
  
    <div class="col-md-6 item">
      <div class="item-in">
        <h4>{title}</h4>
        <div class="seperator"></div>
        <p>{author}</p>
        Read More
          <i class="fa fa-long-arrow-right"></i>
        
      </div>
    
    </div>
    </div>
  );
};

export default News;
