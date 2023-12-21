// AddArticleButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AddArticleButton = () => {
  const { role } = useAuth();
  const navigate = useNavigate();
  const Role = JSON.parse(role);
  console.log(role);
  const handleClick = () => {
    // Redirect to the ArticleForm page
    navigate('/article-form');
  };

  return (
    <div>
      {(Role === "admin" || Role === "editor") && (
        <button onClick={handleClick}>Add Article</button>
      )}
    </div>
  );
};

export default AddArticleButton;
