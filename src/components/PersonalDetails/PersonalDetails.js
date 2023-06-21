import React from 'react';

const PersonalDetails = () => {
  return (
    <div>
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" />

      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="text" id="contactNumber" name="contactNumber" />

      <label htmlFor="emergencyContact">Emergency Contact:</label>
      <input type="text" id="emergencyContact" name="emergencyContact" />
    </div>
  );
};

export default PersonalDetails;