import React from 'react';

const SeparationDetails = () => {
  return (
    <div>
      <label htmlFor="employmentEndDate">Employment End Date:</label>
      <input type="date" id="employmentEndDate" name="employmentEndDate" />

      <label htmlFor="reasonForSeparation">Reason for Separation:</label>
      <select id="reasonForSeparation" name="reasonForSeparation">
        <option value="resignation">Resignation</option>
        <option value="termination">Termination</option>
        <option value="layoff">Layoff</option>
        <option value="retirement">Retirement</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default SeparationDetails;