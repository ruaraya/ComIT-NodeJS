const students = ['nico', 'pepe', 'claudia'];

// forEach - ourForEach - done
// accepts a function - it's called callback
function ourForEach(collection, callback) {
  // iterate over each array element - iterated the collection array
  for (let index = 0; index < collection.length; index++) {
    const collectionItem = collection[index];
    // it will execute the function for each element -- we execute callback for each collectionItem
    callback(collectionItem);
  }
}

const log = function(message) {
  console.log(message);
}

const logToUpperCase = function(message) {
  console.log(message.toUpperCase());
}

ourForEach(students, log);
ourForEach(students, logToUpperCase);

ourForEach(students, function(student) {
  console.log('Student: ', student);
});

students.forEach(function(student) {
  console.log(student);
});
