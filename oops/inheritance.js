// Problem-10 INHERITANCE

// Created a class named Programming and the create an another class that's Framework
// The class Framework is extends from the Programming class

// Lakshmi Narasimhan [CODE]

class Programming {
  // within the constructor define the language variable after using this keyword to assign the language
  constructor(language) {
    this.programming_Language = language;
  }

  // within the class the function named display it simply returns the string and our this method
  display() {
    return "I am a " + this.programming_Language;
  }
}

// Another class is created with the help of extends keyword it means this class is inherit from the programming class
class Framework extends Programming {
  // In the constructor passes the two variables called language (this is from programming class) and then framework it
  // is his own variable
  constructor(language, framework) {
    // pass the language variable into super class for a recreation
    super(language);

    this.framework = framework;
  }

  // finally the displayAll function simply returns our all the return statements
  displayAll() {
    return (
      this.display() + " developer with most familiar in " + this.framework
    );
  }
}

// create a object for framework class with our value , all our values are passing through the parameter
const lang = new Framework("Javascript", "React.js");

// console it :)
console.log(lang.displayAll());
