import React from 'react';

const ExportButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Export Employee Data
    </button>
  );
};

export default ExportButton;