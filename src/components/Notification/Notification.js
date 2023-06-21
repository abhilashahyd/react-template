import React from 'react';

const Notification = ({ success, message }) => {
  return (
    <div className={`notification ${success ? 'success' : 'failure'}`}>
      {success ? 'Import successful!' : 'Import failed!'}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Notification;