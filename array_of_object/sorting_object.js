// ARRAY OF OBJECTS

// SORTING AN ARRAY OF OBJECT
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 95 },
];

console.log("Original object before sorted", students);
// Original object before sorted [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'Charlie', score: 78 },
//   { name: 'David', score: 95 }
// ]

// Create an function with the parameter of arr and this function simply returns
// the sorting function and with in the inner function the two parameters of "a & b"
// this a & b are used to calculate the score and change their object places from
// top to bottom and bottom to top the " - " operator used to find the smallest score

function sorting_function(arr) {
  return arr.sort((a, b) => b.score - a.score);
}

// create an javascript variable and call back the function (sorting_function) with passing the
// students object here
const object_passing = sorting_function(students);

// Console it : )
console.log("After sorted", object_passing);
// After sorted [
//     { name: 'David', score: 95 },
//     { name: 'Bob', score: 92 },
//     { name: 'Alice', score: 85 },
//     { name: 'Charlie', score: 78 }
//   ]
