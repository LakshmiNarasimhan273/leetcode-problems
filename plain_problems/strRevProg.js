// Problem-6 Reverse a given string or number
// string = "javascript"
// output = "tpircsavaj"

// Lakshmi Narasimhan [CODE]

// Create a main reverse function and passing the string as a argument
const reverse_function = function (string) {
  // Just concate the string to string
  let concate_string = string + "";

  //   Create a main part of the function
  // First - add a split method to split the string
  // Second - use a reverse method to reverse it
  // Third - The final step join the reversed string and store it to output variable
  let output = concate_string.split("").reverse().join("");

  //   return the output here
  return output;
};

// console it :)

console.log("Given string is javascript");
console.log("The reversed string are");
console.log(reverse_function("javascript"));

// Output
// Given string is javascript
// The reversed string are
// tpircsavaj
