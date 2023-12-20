// ProfilePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({});
  const [name, setName] = useState('');
  const {user} = useAuth();

  return (
    <div>
      
      <p>Email: {user}</p>
      
    </div>
  );
};

export default ProfilePage;
