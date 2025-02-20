// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
          <i className="bi bi-person-circle"></i> Employee Management
        </Link>
        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-employee">Add Employee</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                <li><Link className="dropdown-item" to="/help">Help</Link></li>
                <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
