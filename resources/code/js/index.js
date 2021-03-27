// function definition
function printMessage() {
  // function body
  console.log('Hi Guys, we\'re not learning about functions');
}

function getMessage() {
  return 'Hi Guys, we\'re learning about functions';
}

function getNicoAge() {
  return 39;
}

// call or execute a function we need function name and ()
printMessage();

const message = getMessage();
console.log(message);

const age = getNicoAge() + 1;
console.log(age);
