// Problem-5 Find the given string is palindrome or not
// string = "malayalam"       | string = "javascript"
// output = It's a Palindrome | output = "Not a Palindrome"

// Lakshmi Narasimhan [CODE]

const palindrome_function = function (string) {
  let length_of_string = string.length;

  for (
    let intial_value = 0;
    intial_value < length_of_string / 2;
    intial_value++
  ) {
    if (string[intial_value] !== string[length_of_string - 1 - intial_value]) {
      return "Not a Palindrome";
    }
  }
  return "It's a Palindrome";
};

const string = "malayalam";
console.log(palindrome_function(string));
// Output
// It's a Palindrome
// ------------------------------------------
// const string = "javascript";
// Output
// Not a Palindrome

// The two string outputs are been complied
