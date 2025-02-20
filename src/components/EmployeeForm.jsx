// src/components/EmployeeForm.jsx
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    qualification: '',
    email: '',
    contact: '',
    gender: 'Male'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this data would be submitted to an API or state management
    console.log(formData);

    // api: localhost:3000/employees
    // method: POST
    // body: formData
    try {
      fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Employee added successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred! Please try again.');
        });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred! Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Qualification</label>
          <input
            type="text"
            className="form-control"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
