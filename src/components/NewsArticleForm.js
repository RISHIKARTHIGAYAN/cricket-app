// components/NewsArticleForm.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import './NewsArticleForm.css'
const NewsArticleForm = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {user} = useAuth();
  const User = JSON.parse(user);
  const handleAddArticle = async () => {
    try {
      // Make an API call to add the news article
      const response = await axios.post('http://localhost:5000/news/add', {
        title,
        author: User,
        content,
      });

      // Handle success, you can redirect or show a success message
      console.log('Article added successfully:', response.data);

      // Redirect to the homepage or any other page
      // history.push('/');
    } catch (error) {
      console.error('Error adding article:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h2>Add News Article</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Article:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddArticle}>Add Article</button>
    </div>
  ); 
 /* return (
    <div className="article-form-container">
      <h2>Create New Article</h2>
      <form className="article-form">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" rows="10" cols="30" onChange={(e) => setContent(e.target.value)}/>

        <button onClick={handleAddArticle}>Submit Article</button>
      </form>
    </div>
  );*/
};

export default NewsArticleForm;
