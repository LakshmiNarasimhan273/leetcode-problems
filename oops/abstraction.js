// Problem- 11 ABSTRACTION
// Creact multiple class and return values but we print only the necessory data
// Abstraction is a process of hiding the data's. we are using the Hirerachical inheritance for the
// abstraction method.

// Lakshmi Narasimhan [CODE]

// Main class Programming after the two classes are extends from this class
class Programming {
  constructor(lang) {
    this.lang = lang;
  }

  // This is the common function name if may me we don't implement this it will throws a error
  display() {
    throw new Error("Display function must be implemented");
  }
}

// First class named frontend extends from the programming class
class Frontend extends Programming {
  // call the display function and simply hide the data from this class we can assign the data while creating our object
  display() {
    console.log(`${this.lang} Frontend Library`);
  }
}

// Second class that's also extends from the Programming class
class Backend extends Programming {
  // call the display function and simply hide the data from this class we can assign the data while creating our object

  display() {
    console.log(`${this.lang} Backend Framework`);
  }
}

// create a first object with passing the data using abstraction method and then return the name with function
const frontend = new Frontend("React.js");
frontend.display();

// create a first object with passing the data using abstraction method and then return the name with function
const backend = new Backend("Node.js");
backend.display();

// Run it :)
