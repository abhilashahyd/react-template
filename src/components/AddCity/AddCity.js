import React, { useState } from 'react';

const AddCity = ({ cities, setCities }) => {
  const [newCity, setNewCity] = useState('');

  const handleCityChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleAddCity = () => {
    setCities([...cities, newCity]);
    setNewCity('');
  };

  return (
    <div>
      <input type="text" value={newCity} onChange={handleCityChange} />
      <button onClick={handleAddCity}>Add City</button>
    </div>
  );
};

export default AddCity;