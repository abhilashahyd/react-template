import React from 'react';

const SelectDepartment = ({ departments, selectedDepartment, handleDepartmentChange }) => {
  return (
    <div>
      <label htmlFor="department">Select Department:</label>
      <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
        {departments.map((department) => (
          <option key={department.id} value={department.name}>
            {department.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDepartment;