import React from 'react';

const SelectUser = ({ users, onSelectUser }) => {
  return (
    <div>
      <label htmlFor="user-select">Select User:</label>
      <select id="user-select" onChange={(e) => onSelectUser(e.target.value)}>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectUser;