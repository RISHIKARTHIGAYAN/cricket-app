// components/Login.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
      let isAuthenticated = false
      if (data.message==="Invalid Credentials"){
        isAuthenticated = false;
      };
      if (data.error!=null){
        console.log(data.error)
        isAuthenticated = false; 
      };
      if(data.token!=null){
        isAuthenticated = true;
      };
      
      if (isAuthenticated) {
        const Role = jwtDecode(data.token).role
        const userData = {
          username: username,
          role: Role
        };
        login(userData);
      }
       // Handle the token or error response
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="email" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
