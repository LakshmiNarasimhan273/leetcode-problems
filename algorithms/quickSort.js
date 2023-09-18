function quickSort(array, low, high) {
  if (low < high) {
    // Choose the pivot element
    let pivot = array[Math.floor((low + high) / 2)];

    // Partition the array around the pivot
    let i = low;
    let j = high;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
      }
    }

    // Recursively sort the left and right subarrays
    quickSort(array, low, j);
    quickSort(array, i, high);
  }
}
