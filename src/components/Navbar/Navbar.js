import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png'
import  { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav_logo">
        <p>NostalgicTreats</p>
        <img src={logo} alt="Logo" className='logo1' />
        {/* <img src={logo} alt="Logo" className='logo2' /> */}
      </Link>
      <div className={`nav_menu ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">SignUp</Link></li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
