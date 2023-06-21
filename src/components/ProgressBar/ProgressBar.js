import React from 'react';

const ProgressBar = ({ progress, remainingTime }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
      <div className="progress-bar__text">
        {progress}% imported, {remainingTime} remaining
      </div>
    </div>
  );
};

export default ProgressBar;