import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" className="logo">Mern Profile Manager</NavLink>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/dashboard" className="navbar-link" activeClassName="active">Dashboard</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/profile" className="navbar-link" activeClassName="active">Profile</NavLink>
          </li>
        </ul>
        <div className="navbar-auth">
          <NavLink to="/login" className="navbar-link">Login</NavLink>
          <NavLink to="/register" className="navbar-link">Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
