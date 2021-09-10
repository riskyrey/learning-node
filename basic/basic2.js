// function statement
function greet() {
  console.log("Hallo");
}
greet();

// function are first class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
const greetMe = function () {
  console.log("Hallo Ky");
};
greetMe();

// it's first class
logGreeting(greetMe);
