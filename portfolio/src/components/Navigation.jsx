import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav-tabs">
      <NavLink 
        end
        to="/" 
        className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
      >
        About Me
      </NavLink>
      <NavLink 
        to="/portfolio" 
        className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
      >
        Portfolio
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
      >
        Contact
      </NavLink>
      <NavLink 
        to="/resume" 
        className={({ isActive }) => isActive ? "nav-tab active" : "nav-tab"}
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default Navigation;

