function getLogFunction() {
  const log = function(message) {
    console.log(message);
  }
  
  return log;
}

const logFunction = getLogFunction();
logFunction('Ohhh this is sooo cooollll!!!! :) :) :)');