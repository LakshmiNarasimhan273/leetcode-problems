// Problem-7 Longest substring without repeating characters
// string = "geeksforgeeks"
// Output = "Non-repeating characters is 7"

// Lakshmi Narasimhan [CODE]

const longest_of_subString = function (string) {
  var max_length = 0, // max_length is a maximum length of the string
    current_string = "", // current string is defined as the calculated string during evalution
    intial, // intial is the intial value of the string
    character, // character is the temp variable to store the evaluated strings
    position; // position is the major variable to find the position of the string

  for (intial = 0; intial < string.length; intial += 1) {
    // The for loop if intially
    // evaluted and check the string of the length and incremented by 1
    character = string.charAt(intial);
    // The charAt is used to define the specified index of the string and get the string

    position = current_string.indexOf(character);
    // The indexOf is the string which is get the string by index

    if (position !== -1) {
      // This condition is for the position is not equal to the string towards backside
      current_string = current_string.substr(position + 1);
      // if the condition is true the substr(subString) is split the entire string
      //   and find the repeating element of the string and removing it based
      // on the index
    }

    current_string += character;
    // Finally check the current string and character(character is the temp variable)
    max_length = Math.max(max_length, current_string.length);
    // The Math.max is find the maximum number of the duplicate element that present
    // in an character(temp variable)
  }

  return max_length;
  //   Finally return the max_length variable
};

// Pass The string in the function parameters through the console
console.log(longest_of_subString("geekforgeeks"));
