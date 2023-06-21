import React, { useState } from 'react';

const DocumentList = ({ documents, onDelete }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDelete = () => {
    onDelete(selectedDocument);
    setSelectedDocument(null);
  };

  return (
    <div>
      <h2>Document List</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <span>{document.name}</span>
            <button onClick={() => setSelectedDocument(document)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedDocument && (
        <div>
          <p>Are you sure you want to delete {selectedDocument.name}?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setSelectedDocument(null)}>No</button>
        </div>
      )}
    </div>
  );
};

export default DocumentList;