function executeFunction(callback) {
  callback(); // calling the log function
}

const log = function() {
  console.log('hi');
}

const otherLog = function() {
  console.log('other hi');
}

// executeFunction(log);
// executeFunction(otherLog);

executeFunction(function() {
  console.log('hi');
});

executeFunction(function() {
  console.log('other hi');
});

executeFunction(function() {
  console.log('Using callback whithout a variable!');
});

// [].forEach(function(item) {
//   //
// });
