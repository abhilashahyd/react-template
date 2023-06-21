import React from 'react';

const WorkDetails = () => {
  return (
    <div>
      <label htmlFor="designation">Designation:</label>
      <input type="text" id="designation" name="designation" />

      <label htmlFor="department">Department:</label>
      <input type="text" id="department" name="department" />

      <label htmlFor="employmentStartDate">Employment Start Date:</label>
      <input type="date" id="employmentStartDate" name="employmentStartDate" />
    </div>
  );
};

export default WorkDetails;