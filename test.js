function bubbleSortFunction(arr) {
  const arrayLength = arr.length;
  let swapped = false;

  for (let i = 0; i < arrayLength - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const tempArr = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tempArr;
      swapped = true;
    }
  }
  while (swapped);

  return arr;
}

const arr = [4, 7, 1, 3];
console.log();
