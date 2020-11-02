const messagesReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  switch (action.type) {
    case "FETCH_MESSAGES":
      return action.payload.messages;
    default:
      return state;
  }
  // TODO: handle some actions
};

export default messagesReducer;
