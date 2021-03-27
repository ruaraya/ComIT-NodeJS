function log(message) {
  console.log('log:', message);
}

function toMyUpperCase(value) {
  const newValue = value + ' and they are soooo good!';
  
  return newValue.toUpperCase();
}

log('Hi we are learning functions');

const message = toMyUpperCase('Hi we are learning functions')

console.log(message);