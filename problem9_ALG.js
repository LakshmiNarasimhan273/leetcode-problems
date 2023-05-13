// Problem-9 Bubble Sorting Algorithm

// Create a Function and with the sorting use functions, conditions, for & do while loop

// Lakshmi Narasimhan [CODE]

// Main function with the name of bubbleSortFunction and receive the array as a parameter
// after that we sort the array based on the loops and conditions

const bubbleSortFunction = function (array) {
  // swapped_array means change the array elements frontwards to backwards , intially the swapped_array is false
  let swapped_array = false;
  // Calculate the length of array and stored in an array_length variable
  const array_length = array.length;

  // created a do while loop based on our condition , while the condition is true the while loop is executed and
  // do block execute the command based on our conditions.
  do {
    // intialise the swapped_array at the top of the loop
    swapped_array = false;

    // iterate the new variable intial_value within the for loop
    for (
      let intial_value = 0;
      intial_value < array_length - 1;
      intial_value++
    ) {
      // with in the condition check the array of intial_value that means (check the array backwards from frontwards)
      // that is greater that array[intial_value + 1] it denotes the loop is check the array from frontwards to backwards
      if (array[intial_value] > array[intial_value + 1]) {
        // after that assign the array of intial value in an new temp_array variable
        const temp_array = array[intial_value];
        // Assign the array[intian_value + 1] (front to back) on the array of intial_value (back to front ) as a variable
        array[intial_value] = array[intial_value + 1];
        // Re-Assign the array of intial_value + 1 onto temp_array variable
        array[intial_value + 1] = temp_array;
        // Return the swapped_array on true
        swapped_array = true;
      }
    }
    // With in the while loop take the swapped_array as a parameter
  } while (swapped_array);
  // Return the array
  return array;
};

// Create a array variable
const array = [7, 2, 5, 1, 8, 6, 4, 3];
// Concole the program , console the function name and give the parameter
console.log(bubbleSortFunction(array));
