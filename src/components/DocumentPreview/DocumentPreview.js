import React, { useState } from 'react';

const DocumentPreview = ({ document, onDelete }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="document-preview"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={document.previewUrl} alt={document.name} />
      {isHovering && (
        <button className="delete-button" onClick={() => onDelete(document.id)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default DocumentPreview;