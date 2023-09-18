// ALGORITHMS

// Problem-14 INSERTION SORTING

// Ther insertion_sorting function takes the array as input

function insertion_sort(array) {
  // the function starts a loop that iterates over the array from the second
  // element (i = 1) to the last element.
  for (let i = 1; i < array.length; i++) {
    // For each iteration, it assigns the current element to the variable current
    //  and keeps track of the index before the current element in the variable j
    let current = array[i];
    let j = i - 1;
    // while loop, it compares current with the elements before it (array[j]).
    // If array[j] is greater than current, it moves array[j] one position to
    // the right (array[j + 1] = array[j]) and decrements j.
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
      //
      // This process continues until j becomes negative or array[j] is no
      // longer greater than current
      //
    }

    // Finally, it assigns current to its correct position in the array (array[j + 1] = current).
    array[j + 1] = current;
  }
  // The sorted array is returned
  return array;
}

// Array Declaration
const array = [4, 2, 8, 1, 5];

// Console it :)
console.log(insertionSort(array));
