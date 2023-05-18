// OOPS STARTED
// Problem-9 ENCAPSULTAION
// Define the three variables language, framework and section
// output = The most popular language for multipurpose development is the JAVASCRIPT and the
// most familiar framework for BACKEND development is the framework called NODE.JS

// Lakshmi Narasimhan [CODE]

//Create a class with the name of Programming
class Programming {
  // Build a constructor for define our variables values back
  constructor() {
    // Variable declaration
    var language;
    var framework;
    var section;
  }

  // First getLanguage function for access the language variable with in the return statement simply use the this keyword
  // assign the language variable onto getLanguage function
  getLanguage() {
    return this.language;
  }

  // setLanguage function is for set our variable value while creating our object and then provide the value of our setLanguage
  setLanguage(language) {
    this.language = language;
  }

  // Create our getFramework function for access the framework variable and same for the language funciton return the framework
  // variable for that
  getFramework() {
    return this.framework;
  }

  // setFramework for set the value for the variabel while creating our object class
  setFramework(framework) {
    this.framework = framework;
  }

  // Same process for this function also which we doing for the above two functions
  getSection() {
    return this.section;
  }

  setSection(section) {
    this.section = section;
  }
}

// *** -- OBJECT CREATION -- ***

// create a new object with using the new keyword
var def = new Programming();

// with the variable name of object using the variable to access the setFunction for all our functions then assign our values
def.setLanguage("JAVASCRIPT");
def.setFramework("NODE.JS");
def.setSection("BACKEND");

// Concole it
console.log(
  "The most popular language for multipurpose development is the " +
    def.getLanguage() +
    " and the most familiar framework for " +
    def.getSection() +
    " development is the framework called " +
    def.getFramework()
);
