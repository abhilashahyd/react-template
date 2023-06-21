import React, { useState } from 'react';

const ValidationComponent = ({ fields, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (!field.value && field.isRequired) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      onSubmit();
    }
  };

  const handleChange = (event, field) => {
    const newFields = [...fields];
    const index = newFields.findIndex((f) => f.name === field.name);
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={(event) => handleChange(event, field)}
          />
          {errors[field.name] && <span>{errors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidationComponent;