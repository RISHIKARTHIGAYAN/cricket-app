// components/AuthPage.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './AuthPage.css'; // Import the CSS file for AuthPage styling
import { useAuth } from '../contexts/AuthContext';
import ProfilePage from './ProfilePage';
const AuthPage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const {user} = useAuth();
  if (user) {
    return <ProfilePage />;
  }
  return (
    <div className="auth-page-container">
      <h1>for the geeks</h1>
      <h3>{isNewUser ? 'New user? Register below:' : 'Welcome back! Log in:'}</h3>

      {isNewUser ? <Register /> : <Login />}

      {/* Toggle between Register and Login */}
      <button onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? 'Already have an account? Log in' : 'New user? Register'}
      </button>
    </div>
  );
};

export default AuthPage;
