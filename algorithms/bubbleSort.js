// ALGORITHMS

// Problem-13 BUBBLE SORTING

// Define the un ordered Array sorting the array with the bubble sorting
// Using the swap method to compare the two elements and check the condition
// once the condition is true we swap the variables and print the sorted value

// Given Array = [3, 5, 2, 4, 1];
// Output = [1, 2, 3, 4, 5];

// Create function with the name bubble_sorting and passing the array as a parameter

const bubble_sorting = function (array) {
  // Check the length of an array and store the value in length_of_array
  let length_of_array = array.length;

  // create a for loop in this case this for loop check the array in backward to forward <<<---

  for (let first_value = 0; first_value < length_of_array - 1; first_value++) {
    // This second for loop is for checking the array from forward to backward --->>>
    for (
      let second_value = 0;
      second_value < length_of_array - first_value - 1;
      second_value++
    ) {
      // Check the condition for the second_value a backward to forward side is greater than
      // second_value + 1 that means forward to backward

      // So the loop is taking the all single elements to check the element within the condition
      if (array[second_value] > array[second_value + 1]) {
        // if the array of element is greater than the compared one that element will move to the
        // last position of the array
        [array[second_value], array[second_value + 1]] = [
          array[second_value + 1],
          array[second_value],
        ];
      }
    }
  }
  //   Returns the array
  return array;
};

// Array Declaration
const array = [3, 5, 2, 4, 1];

// console it :)
console.log(bubble_sorting(array));
