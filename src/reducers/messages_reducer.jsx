const messagesReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  switch (action.type) {
    case "FETCH_MESSAGES": {
      return action.payload.messages;
    }
    case "MESSAGE_POSTED": {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
  // TODO: handle some actions
};

export default messagesReducer;
