console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// created a class named Persn and plug in parameters
class Person {
  constructor(name, pets, residence, hobbies) {
    // use this. to assign open paramaters
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  // Now I want to add a brand new undefined hobby. call it addHobby
  // Add this newHobby into the bucket(paramter)
  // .push will add a element to the end of the array, specifically to hobbies in this case
  // Add/remove/greeting can be called up in later exercises now
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby(hobbyToRemove) {
    this.hobbies = this.hobbies.filter((hobbies) => hobbies !== hobbyToRemove);
  }
  greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// 1.Use class notation to create a class named Coder that inherits from the Person class
// 2. Declare the constructor() method with parameters name (string), pets (number), residence (string), and hobbies (array) allowed to be passed in
// 3. Call the super() method inside the constructor method and pass in the given parameters
// 4. Still inside the constructor body, assign this.occupation as "Full Stack Web Developer"
// 5. Override the greeting() method to console.log a custom greeting from a coder

//1a. Now I want to make a subclass under Person called coder, a type of person with their own paramaters
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
