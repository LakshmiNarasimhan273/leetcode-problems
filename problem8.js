//  Problem-8 Function Currying
//  Create a main function and receive the other functions through the parameters

//  Lakshmi Narasimhan [CODE]

// Main function with the name of zeroth_function and its receive the parameter of number1
function zeroth_funciton(num1) {
  // Second returned function with receiving the parameter of number2
  return function (num2) {
    // Third returned function with receiving the parameter of number3
    return function (num3) {
      // And at last add the all parameterd values with in the main zeroth_fucniton
      return num1 + num2 + num3;
    };
  };
}

console.log(zeroth_funciton(10)(10)(10));
