// arr1 = [3, 2, 5]
// arr2 = [8, 1, 1]
// output = 20

var main_function = function (arr1, arr2) {
  let merged_array = [...arr1, ...arr2];
  console.log("Merged Array here...");
  console.log(merged_array);
  console.log("-----------------------------");

  var evaluate_function = merged_array.reduce(function (num1, num2) {
    return num1 + num2;
  });

  return evaluate_function;
};
var arr1 = [3, 2, 5];
var arr2 = [8, 1, 1];

console.log(main_function(arr1, arr2));
console.log("Final output");
