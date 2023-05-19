// Problem - 12 POLYMORPHISM

//Polymorphism is a fundamental concept in object-oriented programming that refers to the ability of an
// object to take on many forms or have multiple types. In JavaScript, a dynamically-typed language,
// polymorphism can be achieved in various ways.

// Lakshmi Narasimhan [CODE]

// create a main programming class
class Programming {
  // this function is common for all classes
  display() {
    // console is the return statement
    console.log("Javascript is the multipurpose programming language");
  }
}

// This is the library class that extends from the programming
class Library extends Programming {
  // diasplay function simply returns the console statement
  display() {
    console.log("React is the Frontend javascript library");
  }
}

// This framework class also extends from the Programming class
class Framework extends Programming {
  display() {
    console.log("Node is the Backend javascript Framework");
  }
}

// Object section
// create a objects for all classes indidually
let programming = new Programming();
let library = new Library();
let framework = new Framework();

// Run it and console it :)
programming.display();
library.display();
framework.display();
