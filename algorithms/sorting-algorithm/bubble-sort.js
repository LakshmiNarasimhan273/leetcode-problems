// SORTING ALGORITHM

// BUBBLE SORTING
// The runtime complexity of this program is O(n^2).

// Function with receiving the array as an argument
function bubbleSorting(arr) {
  // First step is to find and calcualte the array's length
  let arrLength = arr.length;
  //   Create a variable that used for swapping our array elements with some
  //  condition based checking
  let swapped;

  //   Create a do-while loop for sorting our loop in a much and more efficient way
  do {
    // Declare the swapped variable intially it's false
    swapped = false;

    // For loop with it's basic conditions to process our array
    for (let intial_value = 0; intial_value < arrLength - 1; intial_value++) {
      // Make a condition to find out the greater element based on the looping statement
      if (arr[intial_value] > arr[intial_value + 1]) {
        // If the condition is true i want to relocate the element like the array of i and array of i + 1
        // is changes to be array of i + 1 and array i all these are been doing with in the inner array
        [arr[intial_value], arr[intial_value + 1]] = [
          arr[intial_value + 1],
          arr[intial_value],
        ];
        // Let's make the swapped false into true
        swapped = true;
      }
    }
    // This is the more important feature of this program once all these conditions and loopings are been
    // done we make the array of length variable decremented ,
    //  it meanks "WE REDUCE THE SIZE OF OUR INNER LOOP".
    arrLength--;
  } while (swapped);

  //   Finally return the array
  return arr;
}

// Intialize the unsorted array
const unSortedArray = [7, 2, 5, 1, 6, 3];
// Created a variable and call back the function bubbleSorting and pass the unsorted array as a argument
const sortedArray = bubbleSorting(unSortedArray);

// Let's make a console : )
console.log(sortedArray);
