// Navigation.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
//import './Navigation.css';
import AuthButton from './AuthButton';
import logo from './px.png';
import SeriesDropdown from './SeriesDropDown'; // Import the SeriesDropdown component
import { useAuth } from '../contexts/AuthContext';
// import seriesData from '../assets/data/seriesData.json';
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const User=JSON.parse(user);
  let username = null;
  if (user != null) {
    const username =user;
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="logo-text">for the geeks</span>
      </div>
      <ul className="nav-links">
        {/* Use Link for navigation with "to" set to "/" */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/fixtures">Fixtures</Link></li>
        <li><Link to="/stats">Stats Corner</Link></li>
        <li><Link to="/players">Players</Link></li>
      </ul>
      {user ? (
        <div>
          <span >Hello, <Link to={'/auth'}>{User}</Link></span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/auth"><AuthButton/></Link>
      )}
    </nav>
  );
};

export default Navigation;
