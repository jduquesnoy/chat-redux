/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
// eslint-disable-next-line react/prefer-stateless-function
import Message from '../components/message';



class MessageList extends Component {
  componentWillMount() {
    // this.props.fetchMessages();
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
