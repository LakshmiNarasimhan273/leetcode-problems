// Problem-2 Adding the Two Array and getting the output of
// Single value

// array1 = [3, 5, 2]
// array2 = [7, 2, 1]
// output = 20 and console the output and merged array

// Laksmi Narasimhan [CODE]

let array1 = [3, 5, 2];
let array2 = [7, 2, 1];

// Main function for adding the array
const adding_array_function = function (array1, array2) {
  // Merged the array with the help of speard operator
  let merged_array = [...array1, ...array2];

  // Console Section First part of the console is print a merged array
  console.log("Merged Array");
  console.log(merged_array);
  console.log("------------------------------");
  // This console is for print the added value
  console.log("Final Output here");

  // The evaluate function contains a reduce function within the function the
  // parameter called number & number2 simply adding in the return section
  let evaluate_function = merged_array.reduce(function (number1, number2) {
    return number1 + number2;
  });

  // Finally returns the evaluate function on it
  return evaluate_function;
};

// console it :)

console.log(adding_array_function(array1, array2));
