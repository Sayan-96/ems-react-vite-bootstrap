// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import HomePage from './components/home/HomePage'
import Footer from './components/Footer';
import EmployeeForm from './components/EmployeeForm';
import Help from './components/Help';
import AboutUs from './components/About Us';

const App = () => {
  return (
    <Router>
      <Header />
      <HomePage />
      <Routes>
        <Route path="/" element={<div className="container mt-5"><h1>Welcome to the Employee Management System</h1></div>} />
        <Route path="/add-employee" element={<EmployeeForm />} />
      </Routes>
      <Help />
      <AboutUs />
      <Footer />
    </Router>
  );
};

export default App;
