const main_function = function (array) {
  let sorted_array = array.sort().slice();

  let duplicate_element = [];

  for (
    let checking_value = 0;
    checking_value < sorted_array.length - 1;
    checking_value++
  ) {
    if (sorted_array[checking_value + 1] === sorted_array[checking_value]) {
      duplicate_element.push(sorted_array[checking_value]);
    }
  }

  return duplicate_element;
};
const array = [2, 6, 5, 7, 2, 4, 7, 6, 9, 8];

console.log("Original Array", array);
console.log("Duplicate element present in array", main_function(array));
