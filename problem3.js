// Problem-3 Capitalize a camelCase string
// string = helloGithub
// output = Hello Github

//  Lakshmi Narasimhan [CODE]

const string = "helloGithub";

// First Replace a string into an Regular expression
const replacer = string.replace(/([A-Z])/, " G");

// Next specify the index of the Character which is going to be uppercase
// The index of 0 is denoted the h(H)  and concate the slice method
// into the replacer directly and then console the statement

const output = replacer.charAt(0).toUpperCase() + replacer.slice(1);

console.log(output);
