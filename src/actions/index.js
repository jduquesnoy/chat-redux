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