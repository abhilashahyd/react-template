import React, { useState } from 'react';

const AddDesignation = ({ designations, setDesignations }) => {
  const [newDesignation, setNewDesignation] = useState('');

  const handleInputChange = (event) => {
    setNewDesignation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setDesignations([...designations, newDesignation]);
    setNewDesignation('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="designationName">Designation Name:</label>
      <input
        type="text"
        id="designationName"
        value={newDesignation}
        onChange={handleInputChange}
      />
      <button type="submit">Add Designation</button>
    </form>
  );
};

export default AddDesignation;