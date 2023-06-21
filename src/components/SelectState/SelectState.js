import React from 'react';

const SelectState = ({ states, selectedState, onChange }) => {
  return (
    <select value={selectedState} onChange={onChange}>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default SelectState;