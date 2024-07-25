import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav_logo">
        <p>NostalgicTreats</p>
        <img src={logo} alt="Logo" className='logo1' />
        {/* <img src={logo} alt="Logo" className='logo2' /> */}
      </Link>
      <ul className="nav_menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
