import React from "react";
import Childcomponent from "./Childcomponent";

class Mycomponent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    arrJobs: [
      {
      id: 'abcJob1',
      title: 'developer',
      salary: '500$'},
      {
        id: 'abcJob2',
        title: 'Testers',
        salary: '400$'},
      {
        id: 'abcJob3',
        title: 'Boss',
        salary: '4000$'}

    ]
  }

  handlechangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })

  }

  handlechangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handlesubmit = (event) => {
    event.preventDefault();
    console.log('>> check data input:', this.state)
  }


  render() {
    console.log("call render: ", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handlechangeFirstName(event)}
          /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handlechangeLastName(event)}
          /><br /><br />
          <input
            type="submit"
            onClick={(event) => this.handlesubmit(event)}
          />
        </form>
        <Childcomponent 
        name={this.state.firstName} 
        age={'25'}
        address = {'Ha noi'}
        arrJobs = {this.state.arrJobs}
        />
      </>
    );
  }
}

export default Mycomponent;
