const students = ['nico', 'pepe', 'claudia'];

// const filteredStudents = students.filter(function(student) {
//   return student !== 'nico';
// });

// console.log(filteredStudents);

function filter(collection, callback) {
  const newCollection = [];
  
  for (let index = 0; index < collection.length; index++) {
    const collectionItem = collection[index];
    
    if (callback(collectionItem)) {
      newCollection.push(collectionItem);
    }
  };
  
  return newCollection;
}

const ages = [10, 11, 12, 13, 20, 30, 40, 50];

const nameFilter = function(value) {
  return value !== 'nico';
};

const kidsFilter = function(age) {
  return age < 18;
}

// const filteredStudents = filter(students, nameFilter);
// console.log(filteredStudents);

const filteredStudents = filter(students, function(name) {
  return name !== 'claudia';
});

console.log(filteredStudents);

// const kidsAges = filter(ages, kidsFilter);
// console.log(kidsAges);