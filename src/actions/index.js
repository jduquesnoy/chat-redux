// TODO: add and export your own actions
// eslint-disable-next-line import/prefer-default-export
export function fetchMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(author, content) {
  // TODO
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'MESSAGE_POSTED',
    payload: promise // Will be resolved by redux-promise
  };
}

