import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h3>{result.name}</h3>
          <p>ID: {result.id}</p>
          <p>Designation: {result.designation}</p>
          <p>Email: {result.email}</p>
          <p>Phone Number: {result.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;