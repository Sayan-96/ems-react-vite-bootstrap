// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Feature Section Component
const FeatureSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Key Features</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card shadow-sm border-light">
            <img
              src="/images/manage-employees.jpg" // Image from public/images
              className="card-img-top"
              alt="Manage Employees"
            />
            <div className="card-body">
              <h5 className="card-title">Manage Employees</h5>
              <p className="card-text">Add, update, and remove employees with ease. Keep track of their details in one place.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm border-light">
            <img
              src="/images/employee-statistics.jpg" // Image from public/images
              className="card-img-top"
              alt="Employee Statistics"
            />
            <div className="card-body">
              <h5 className="card-title">Employee Statistics</h5>
              <p className="card-text">View insightful reports and track employee performance with custom filters.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm border-light">
            <img
              src="/images/role-management.jpg" // Image from public/images
              className="card-img-top"
              alt="Role Management"
            />
            <div className="card-body">
              <h5 className="card-title">Role Management</h5>
              <p className="card-text">Assign roles and permissions to manage employee access and responsibilities effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
