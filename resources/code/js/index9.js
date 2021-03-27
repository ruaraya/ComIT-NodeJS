const students = ['nico', 'pepe', 'claudia'];

const log = function(value) {
  console.log(value);
}

const logInUpperCase = function(value) {
  console.log(value.toUpperCase());
}

students.forEach(log);
students.forEach(logInUpperCase);

students.forEach(function(value) {
  console.log(value);
});

students.forEach(function(value) {
  console.log(value.toUpperCase());
});
