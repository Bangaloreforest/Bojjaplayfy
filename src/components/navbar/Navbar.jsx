import React from 'react';
import './navbar.css';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src/assets/icons/svac.png" alt="Logo" className="navbar-logo" />
        <span className="navbar-appname">Bojja's Playfy</span>

        {/* Updated Home Button */}
        <button className="navbar-homebutton" onClick={onHomeClick}>
          <img src="https://cdn.pixabay.com/photo/2017/01/07/19/03/icon-1961299_1280.png" 
               alt="Home Icon" className="home-icon"/>
        </button>
      </div>

      <div className="navbar-middle">
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>

      <div className="navbar-right">
        <button className="navbar-button">Install App</button>
        <button className="navbar-button">Login</button>
        <button className="navbar-button navbar-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;