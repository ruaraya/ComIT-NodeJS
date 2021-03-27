function executeFunction(callback) {
  callback('Value');
}

const log = function(message) {
  console.log(message);
}

executeFunction(log);

executeFunction(function(message) {
  console.log(message);
});