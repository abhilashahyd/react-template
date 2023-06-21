import React from 'react';

const BasicDetails = () => {
  return (
    <div>
      <label htmlFor="employeeName">Employee Name:</label>
      <input type="text" id="employeeName" name="employeeName" />

      <label htmlFor="employeeID">Employee ID:</label>
      <input type="text" id="employeeID" name="employeeID" />

      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default BasicDetails;