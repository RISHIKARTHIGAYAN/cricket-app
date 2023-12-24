// ProfilePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import AddArticleButton from './AddArticleButton';
import NewsArticleForm from './NewsArticleForm';
import { useNavigate } from 'react-router-dom';
import './ProfilepageButton.css'
const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({});
  const [name, setName] = useState('');
  const {user,role} = useAuth();
  const User = JSON.parse(user)
  const Role=JSON.parse(role);
  const navigate=useNavigate()

  console.log(JSON.parse(role));
  return (
    <div>
      
      <p>Email: {User}</p>
      <AddArticleButton/>
      <br/>
      <hr/>
      {(Role === 'admin') && (
        <Link to="/admin-panel">
          <button className='button-54'>Admin Panel</button>
        </Link>
      )}
    </div>
  );
};

export default ProfilePage;
