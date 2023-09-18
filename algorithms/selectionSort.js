function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // Find the minimum element in the unsorted subarray
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted subarray
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}
