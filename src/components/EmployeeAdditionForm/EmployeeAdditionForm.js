import React, { useState } from 'react';
import FileUpload from './FileUpload';

const EmployeeAdditionForm = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [users, setUsers] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [documents, setDocuments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleUsersChange = (event) => {
    setUsers(event.target.value);
  };

  const handleStatesChange = (event) => {
    setStates(event.target.value);
  };

  const handleCitiesChange = (event) => {
    setCities(event.target.value);
  };

  const handleDocumentsChange = (files) => {
    setDocuments(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Designation:
        <input type="text" value={designation} onChange={handleDesignationChange} />
      </label>
      <label>
        Department:
        <input type="text" value={department} onChange={handleDepartmentChange} />
      </label>
      <label>
        Users:
        <input type="text" value={users} onChange={handleUsersChange} />
      </label>
      <label>
        States:
        <input type="text" value={states} onChange={handleStatesChange} />
      </label>
      <label>
        Cities:
        <input type="text" value={cities} onChange={handleCitiesChange} />
      </label>
      <FileUpload onChange={handleDocumentsChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeAdditionForm;