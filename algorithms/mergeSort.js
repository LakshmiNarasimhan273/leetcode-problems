// ALGORITHMS

// Problem-15 MERGE SORTING

function mergeSort(array) {
  // first checks if the length of the array is less than or equal to 1.
  // If so, it means the array is already sorted so it returns the array as is.

  // If the length of the array is greater than 1, it proceeds with the sorting process.

  if (array.length <= 1) {
    return array;
  }

  // calculates the middle index of the array using Math.floor(array.length / 2).
  // This divides the array into two roughly equal halves.
  const middle = Math.floor(array.length / 2);

  // recursively calls mergeSort on the left half of the array (array.slice(0, middle))
  //  and assigns the result to the variable left.
  const left = mergeSort(array.slice(0, middle));
  // recursively calls mergeSort on the right half of the array (array.slice(middle))
  //  and assigns the result to the variable right.
  const right = mergeSort(array.slice(middle));

  // then returns the result of calling the merge function with left and right as arguments.
  return merge(left, right);
}

function merge(left, right) {
  // initializes an empty array called result to store the merged result.
  const result = [];
  //
  // also initializes two pointers i and j to track the current indices
  //  of left and right arrays, respectively.
  //
  let i = 0;
  let j = 0;

  // enters a while loop that runs as long as both i and j are within
  // the bounds of their respective arrays.
  while (i < left.length && j < right.length) {
    // Within the while loop, it compares the current elements at indices
    // i and j in left and right arrays, respectively.
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // If the element in left is smaller than the element in right,
  // it is pushed to the result array, and i is incremented.
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // If the element in right is smaller than or equal to the
  //  element in left, it is pushed to the result array, and j is incremented.
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  //
  // This process continues until either left or right array is exhausted.
  //

  // After the while loop, there might be remaining elements in either
  //  left or right array. The program enters two separate while loops
  // to push the remaining elements to the result array.

  // Finally, the result array, which contains the sorted elements, is returned.

  return result;
}

// Array Declaration
const array = [7, 2, 1, 8];

// console it :)
console.log(mergeSort(array));
