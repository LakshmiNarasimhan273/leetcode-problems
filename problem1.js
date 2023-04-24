//  Problem - 1 Find the indices of two number in an array, given by the
// Target which is given by the problem

// array = [2, 7, 11, 15], target = 9
// Output = [0, 1]

// Lakshmi Narasimhan [CODE]

const adding_function = function (array, target) {
  // First for loop to check the first index
  for (let first_index = 0; first_index < array.length; first_index++) {
    // Second for loop to check the second index
    for (
      let second_index = first_index + 1;
      second_index < array.length;
      second_index++
    ) {
      // With this condition section we cannot use the Operator to check
      // this condition .
      if (array[first_index] + array[second_index] === target) {
        // returns the first & second index which find in the loop
        return [first_index, second_index];
      }
    }
  }
};

var array = [2, 7, 11, 15],
  target = 18;
console.log(adding_function(array, target));

// Output has been verified [0, 1]
