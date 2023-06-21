import React, { useState } from 'react';

const AddDepartment = ({ departments, setDepartments }) => {
  const [newDepartment, setNewDepartment] = useState('');

  const handleInputChange = (event) => {
    setNewDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDepartments([...departments, newDepartment]);
    setNewDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="departmentName">Department Name:</label>
      <input
        type="text"
        id="departmentName"
        value={newDepartment}
        onChange={handleInputChange}
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default AddDepartment;