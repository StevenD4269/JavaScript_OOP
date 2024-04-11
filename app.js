console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// created a class named Person and plug in parameters
class Person {
  constructor(name, pets, residence, hobbies) {
    // use this. to assign open paramaters
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  // Now I want to add a brand new undefined hobby. call it addHobby
  // Add this newHobby into the bucket(paramater)
  // .push will add a element to the end of the array, specifically to hobbies in this case
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby(hobbyToRemove) {
    this.hobbies = this.hobbies.filter((hobbies) => hobbies !== hobbyToRemove);
  }
  // this.hobbies to target that item, filter will tell the pc to take a certain condition
  // that condition is to check if two conditions are not equal using !==(comparison operator) followed by hobbyToRemove is for the hobby to remove from the list
  greeting() {
    console.log("Hello fellow person!");
  }
}


// splice version
// The problem with find is you need to know whats at the certain index
// could also do a 'for'f loop
// const index = this.hobbies.findIndex((element) => { return (element == hobby)});
// this.hobbies.splice(index, 1);
// why does this work?
// const index = this.hobbies.findIndex((element) => { return (element == hobby)});

// This line finds the index of an element in the hobbies array that matches a certain condition.
// this.hobbies.findIndex(...) searches for an element in the hobbies array and returns its index.
// (element) => { return (element == hobby)} is a callback function passed to findIndex(). It's an arrow function that checks if each element in the hobbies array is equal to the hobby being searched for.
// If the condition (element == hobby) is true for any element in the array, findIndex() returns the index of that element. If no matching element is found, it returns -1.
// The result is stored in the index variable.
// this.hobbies.splice(index, 1);

// This line removes an element from the hobbies array at a specific index.
// this.hobbies.splice(...) is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// index is the index at which to start changing the array. In this case, it's the index of the element we want to remove.
// 1 is the number of elements to remove from the array starting at the index.
// After this line executes, the hobbies array will have one less element, as the element at the specified index has been removed.



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// 1.Use class notation to create a class named Coder that inherits from the Person class
// 2. Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
// 3. Call the super() method inside the constructor method and pass in the given parameters
// 4. Still inside the constructor body, assign this.occupation as "Full Stack Web Developer"
// 5. Override the greeting() method to console.log a custom greeting from a coder

//1a. Make a subclass under Person called coder, a type of person with their own paramaters
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    // The super() function is used to initialize the attributes of the parent class
    super(name, pets, residence, hobbies);
    //   use .this to add the string per the instructions
    this.occupation = "Full Stack Web Developer";
  }
  // 5a:
  greeting() {
    console.log("Hello from the coder!");
  }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const newPerson = new Person("Dan", 3, "California", "MMA");
const newCoder = new Coder("Bob", 1, "Nevada", "running");

console.log(newPerson);
newPerson.addHobby("Swimming");
console.log(newPerson.hobbies);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
// 1. Create a class called Calculator
// 2. Initialize a result property within the calculator constructor with an initial value of 0
// 3. Declare methods on the class that represent basic arithmetic: add(), subtract(), multiply(), divide()
// 4. These methods should currently take in 2 parameters, and assign the result of the appropriate arithmetic based on the method name to the object's result property
// 5. Should return the result
// 6. EXTRA: if only one value is passed in, use the object's current result value as the first value in the operation
// 7. Declare a method called displayResult() that will console.log the result property stored on the object
// 8. Test your work by instantiating an object from your class (using the class constructor), and calling some of the calculator methods
class Calculator {
    constructor() {
        this.result = 0;

    };
