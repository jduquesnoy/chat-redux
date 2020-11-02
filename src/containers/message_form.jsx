import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { createMessage } from '../actions';
// import createMessage from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

  }

  handleChange= (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit= (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.currentUser, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { createMessage:createMessage },
  dispatch
  ); 
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    // selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
