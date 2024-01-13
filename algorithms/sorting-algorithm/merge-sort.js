// SORTING ALGORITHM

// MERGE SORTING
// The runtime complexity of this program is O(n log n)

// Create a function passing a array as argument
function mergeSort(arr) {
  // Condition for checking the array of length is lesser than or equal to 1
  // if it true then return the array
  if (arr.length <= 1) {
    return arr;
  }

  //   Three variables for split the array into three parts Middle, Left & Right sections

  // In the middle section we can be use the Math.floor object to split the
  // Array of length is by /2 it means we find out the center element in an array by
  // using the length of an array
  const middle = Math.floor(arr.length / 2);

  //   For left section the we just select the 0th index of array and it slice
  // it from the middle section
  const left = arr.slice(0, middle);
  //   For right simply slice the middle section that's enough
  const right = arr.slice(middle);
  //   Then callback the another function with passing the argument of this function
  // with left and right variables
  return merge(mergeSort(left), mergeSort(right));
}

// Another function for making the sorting process
function merge(left, right) {
  // First create an variable with an empty array
  let resultArray = [];
  //   Intial value of the leftIndex & rightIndex are 0
  let leftIndex = 0;
  let rightIndex = 0;

  //   While loop the major part of this sorting algorithm is while loop and their
  // conditions , first with in the while loop check the condition of leftIndex is lesser
  // than the left of their length and rightIndex is lesser than the right of the length
  // if it was true then push with an condition to resultArray variable
  while (leftIndex < left.length && rightIndex < right.length) {
    // The condition for pushing element in an emoty array make a check for the
    // left of leftIndex is lesser than the right of rightIndex if it was fine and true
    // all the elements are pushes to the resultArray empty array
    resultArray.push(
      left[leftIndex] < right[rightIndex]
        ? left[leftIndex++]
        : right[rightIndex++]
    );
  }
  //   The concatation process first select the resultArray than select and merge the left
  // section and than finally select and merge the right section to making an splited array
  // into a one array
  return [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

// Intialize the unsorted array
const unsortedArray = [54, 132, 89, 38, 22, 91, 8, 52];
// Created a variable for call back the function and passing an argument
const functionCalling = mergeSort(unsortedArray);

// Let's make a console : )
console.log(functionCalling);
