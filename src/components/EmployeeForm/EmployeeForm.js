import React from 'react';
import BasicDetails from './BasicDetails';
import WorkDetails from './WorkDetails';
import SeparationDetails from './SeparationDetails';
import PersonalDetails from './PersonalDetails';
import CommunicationDetails from './CommunicationDetails';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicDetails: {},
      workDetails: {},
      separationDetails: {},
      personalDetails: {},
      communicationDetails: {}
    };
  }

  handleBasicDetailsChange = (basicDetails) => {
    this.setState({ basicDetails });
  }

  handleWorkDetailsChange = (workDetails) => {
    this.setState({ workDetails });
  }

  handleSeparationDetailsChange = (separationDetails) => {
    this.setState({ separationDetails });
  }

  handlePersonalDetailsChange = (personalDetails) => {
    this.setState({ personalDetails });
  }

  handleCommunicationDetailsChange = (communicationDetails) => {
    this.setState({ communicationDetails });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Submit employee details to server
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <BasicDetails onChange={this.handleBasicDetailsChange} />
        <WorkDetails onChange={this.handleWorkDetailsChange} />
        <SeparationDetails onChange={this.handleSeparationDetailsChange} />
        <PersonalDetails onChange={this.handlePersonalDetailsChange} />
        <CommunicationDetails onChange={this.handleCommunicationDetailsChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;