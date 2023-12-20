// AuthButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.css'
const AuthButton = () => {
  return (
    <div className="auth-button">
      <Link to="/auth">
        <button>Register/Login</button>
      </Link>
    </div>
  );
};

export default AuthButton;
