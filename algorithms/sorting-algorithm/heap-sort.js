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
  const leftElement = 2 * initialValue + 1;
  const rightElement = 2 * initialValue + 2;

  if (leftElement < arrayLength && arr[leftElement] > arr[largestElement]) {
    largestElement = leftElement;
  }

  if (rightElement < arrayLength && arr[rightElement] > arr[largestElement]) {
    largestElement = rightElement;
  }

  if (largestElement !== initialValue) {
    [arr[initialValue], arr[largestElement]] = [
      arr[largestElement],
      arr[initialValue],
    ];
    heapFunction(arr, arrayLength, largestElement);
  }
}

const unSortedArray = [5, 2, 3, 1];
heapSort(unSortedArray);
console.log(unSortedArray);
