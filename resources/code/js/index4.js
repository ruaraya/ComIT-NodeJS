function log(message) {
  console.log('log:', message);
}

function getMessage() {
  return 'Hi Guys, we\'re learning about functions';
}

const myMessage = getMessage();
log(myMessage);

log( getMessage() );

