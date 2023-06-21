import React, { useState } from 'react';

const AddState = ({ states, setStates }) => {
  const [newState, setNewState] = useState('');

  const handleInputChange = (event) => {
    setNewState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStates([...states, newState]);
    setNewState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="stateName">State Name:</label>
      <input
        type="text"
        id="stateName"
        value={newState}
        onChange={handleInputChange}
      />
      <button type="submit">Add State</button>
    </form>
  );
};

export default AddState;