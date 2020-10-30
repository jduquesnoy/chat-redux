/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// eslint-disable-next-line react/prefer-stateless-function
import Message from '../components/message';

import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    debugger
    this.fetchMessages('test');
  }

  render() {
    return (
      <div className="">
        {this.props.messages.map((message) => {
          return <Message key={message.created_at} message={message} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { messages: state.messages };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
