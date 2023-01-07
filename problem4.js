// Problem-4 Finding the Duplicate element in an array
// array = [1, 2, 3, 4, 2, 4, 5, 6]
// output = [2, 4]

//  Lakshmi Narasimhan [CODE]

const duplicate_function = function (array) {
  // Sorting the array using sort & slice method
  let sorted_array = array.sort().slice();
  //   Intially the duplicate element of the variable is empty array
  let duplicate_element = [];
  // create an for loop for checking the length in backwards and increment the intial value
  for (
    let intial_value = 0;
    intial_value < sorted_array.length - 1;
    intial_value++ //   Check the condition of the sorted_array of the index from front side and the // sorted_array of the intial values are equal . just returns the duplicate_element // of the sorted_array of intial_value is pushed into the duplicate_element variable
  ) {
    if (sorted_array[intial_value + 1] === sorted_array[intial_value]) {
      duplicate_element.push(sorted_array[intial_value]);
    }
  }
  //   After the loop just returns the duplicate_element variable;
  return duplicate_element;
};

var array = [1, 2, 3, 4, 2, 4, 5, 6];
console.log(duplicate_function(array));
