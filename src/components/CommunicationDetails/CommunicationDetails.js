import React from 'react';

const CommunicationDetails = () => {
  const [email, setEmail] = React.useState('');
  const [preferredMode, setPreferredMode] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePreferredModeChange = (event) => {
    setPreferredMode(event.target.value);
  };

  return (
    <div>
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="preferredMode">Preferred Communication Mode:</label>
      <select id="preferredMode" value={preferredMode} onChange={handlePreferredModeChange}>
        <option value="">Select an option</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="text">Text</option>
      </select>
    </div>
  );
};

export default CommunicationDetails;