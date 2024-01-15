// SORTING ALGORITHM

// HEAP SORTING
// The runtime complexoty of this program is O(n)

// Sorting function with an array of argument
function heapSort(arr) {
  // Variable with holding an length of an array
  const arrayLength = arr.length;

  //   First loop for making the arrayLength half and find the centre element in an array
  for (
    let initialValue = Math.floor(arrayLength / 2) - 1;
    initialValue >= 0;
    initialValue--
  ) {
    heapFunction(arr, arrayLength, initialValue);
  }

  //   Second loop for decrement the array element for finding the lowest
  // element in array and then swap their places to lowest to highest
  for (let initialValue = arrayLength - 1; initialValue > 0; initialValue--) {
    [arr[0], arr[initialValue]] = [arr[initialValue], arr[0]];
    // Pass the array , intialValue and their index to the heapFunction parameter
    heapFunction(arr, initialValue, 0);
  }
}

// Function for split the array based on their condition to find the lowest elements
function heapFunction(arr, arrayLength, initialValue) {
  let largestElement = initialValue;
  // Left element variable with some intial conditions
  const leftElement = 2 * initialValue + 1;
  const rightElement = 2 * initialValue + 2;

  // first condition for finding the left elements in an array
  if (leftElement < arrayLength && arr[leftElement] > arr[largestElement]) {
    largestElement = leftElement;
  }

  // second condition for finding the right elements in an array
  if (rightElement < arrayLength && arr[rightElement] > arr[largestElement]) {
    largestElement = rightElement;
  }

  // if the largestElement is not equal to their intialValue if it was true
  if (largestElement !== initialValue) {
    // change the position of intialVale largestElement into
    // largestElement and intialValue this is my condition
    [arr[initialValue], arr[largestElement]] = [
      arr[largestElement],
      arr[initialValue],
    ];
    // callback a heapFunction with passing an argument
    // of array, arrayLength and the largestElement

    heapFunction(arr, arrayLength, largestElement);
  }
}

// Intialize tha unsorted array
const unSortedArray = [5, 2, 3, 1];
// Created a variable and call back the heapSort with arguments
const sortedArray = heapSort(unSortedArray);

// Let's make a console : )
console.log(sortedArray);
