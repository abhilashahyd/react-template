import React from 'react';

const EmployeeAddedNotification = ({ employeeName }) => {
  return (
    <div className="notification">
      <p>{employeeName} has been successfully added to the system.</p>
    </div>
  );
};

export default EmployeeAddedNotification;