// Challenge 1
const students = [
  'Tre', 'Sonny', 'Crystal', 'Ilyas', 'Greg', 'Fernando', 'Timothy', 'Patrick', 'Steve', 'Jimothy', 'Pat', 'Arnold', 'Andy'
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Challenge 2
const grades = [100, 80, 110, 75, 83, 64];

for (let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}

// Challenge 3
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}

// Challenge 4
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2 === 0) {
    console.log(mixedSignNumbers[i]);
  }
}

// Challenge 5
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

symmetricalCapitals.shift(); // Remove the first element
symmetricalCapitals.shift(); // Remove the second element
symmetricalCapitals.pop();   // Remove the last element

for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i]);
}

// Challenge 6
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.unshift(0);      // Add a value to the start
fibonacciNumbers.push(21, 34);    // Add two values to the end

for (let i = 0; i < fibonacciNumbers.length; i++) {
  console.log(fibonacciNumbers[i]);
}

// Challenge 7
const newArray = ['value1', 'value2', 'value3', 'value4', 'value5'];

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// Challenge 8
const emptyArray = [];

emptyArray.unshift('value1');
emptyArray.push('value2', 'value3', 'value4', 'value5');

for (let i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i]);
}

// Challenge 9
const studentsSubset = students.slice(3, 11);

for (let i = 0; i < studentsSubset.length; i++) {
  console.log(studentsSubset[i]);
}

// Challenge 10
const studentsCopy = [];
for (let i = 3; i <= 10; i++) {
  studentsCopy.push(students[i]);
}

for (let i = 0; i < studentsCopy.length; i++) {
  console.log(studentsCopy[i]);
}

// Challenge 11
const studentsSliceCopy = students.slice(3, 11);

for (let i = 0; i < studentsSliceCopy.length; i++) {
  console.log(studentsSliceCopy[i]);
}

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Challenge 12
const removedDinosaurs = dinosaurs.splice(4, 3);

for (let i = 0; i < removedDinosaurs.length; i++) {
  console.log(removedDinosaurs[i]);
}

// Challenge 13
const dinosaurString = dinosaurs.join('*');
console.log(dinosaurString);

// Challenge 14
dinosaurs.reverse();

for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

// Challenge 15
const combinedArray = primaries.concat(secondaries);

for (let i = 0; i < combinedArray.length; i++) {
  console.log(combinedArray[i]);
}

console.log(primaries);
console.log(secondaries);
