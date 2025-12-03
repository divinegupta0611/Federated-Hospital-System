// NavBar.jsx
import React, { useState, useEffect } from 'react';
import '../styles/NavBarCSS.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in by retrieving from localStorage
    const storedUser = localStorage.getItem('fhs_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    setUser(null);
    // Optionally redirect to home or login page
    window.location.href = '/';
  };

  const getInitial = () => {
    if (!user) return '';
    const name = user.role === 'doctor' ? user.fullName : user.hospitalName;
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h2 className="fhs-logo">FHS</h2>
        </div>
        
        <div className="nav-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          
          {user ? (
            <>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
              <div className="user-circle" title={user.role === 'doctor' ? user.fullName : user.hospitalName}>
                {getInitial()}
              </div>
            </>
          ) : (
            <Link to="/Signup" className="nav-link signup-link">Signup</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;