import React from 'react';

const SelectDesignation = ({ designations, selectedDesignation, onDesignationChange }) => {
  return (
    <div>
      <label htmlFor="designation">Select Designation:</label>
      <select id="designation" value={selectedDesignation} onChange={onDesignationChange}>
        {designations.map((designation) => (
          <option key={designation} value={designation}>
            {designation}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDesignation;