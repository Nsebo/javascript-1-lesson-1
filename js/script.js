// Global and Local scope (Functional scope)

var myName = "Uzo";

function login(arg) {
  var myName = arg;
  return myName;
}

var someVar = login("nsebo");

console.log("someVar: " + someVar);

console.log("myName: " + myName);

// local scope
function myFunction() {
  var carName = "Volvo";
  return carName;
}

// global scope
var carName = "Volvo";

function myName() {
  // code here
}

// callback functions

var enterSite = function () {
  console.log("hello you entered the website");
};

function loginToSite(arg) {
  arg();
}

loginToSite(enterSite);

// Assign function to variable

var loginHere = function (name) {
  console.log("you may login:, name");
};

loginHere("Nse");

// function login(name) {
//   console.log("you may login:, name");
// }

// example 4

var user = {
  name: "Uzo",
  jon: "student",
  login: function (name) {
    console.log("hello name is", name);
  },
  status: "happy",
};

console.log("My user Object: ", user);
console.log("Name: ", user.name);

user.login("Uzo");

// window object
console.dir(window);

// const is constant
// const count = 1;
// count = 99;
// count = count + 20;

// console.log(count);

// let

let count = 1;
count = 2;
count = count + 1;
count + console.log("My count is equal to " + count);

// Block scope
// {
//   let pet = "dog";
//   function bark() {
//     console.log(pet);
//   }
//   bark();
// }

const profile = {
  name: "Oloh",
  age: "32",
  job: "nurse",
};

console.log("console log", profile);
console.dir(profile);

//  this is backticks
// const sentence = "One
// Two";
// console.log(sentence);

// // this is using double string
// const sentenceTwo = 'One.\n Two';
// console.log(sentenceTwo);

// var catsArray = [...]

const property = {
  name: "Oloh",
  age: "32",
  job: "nurse",
};

console.log(property["name"]);
console.log(property.type);
