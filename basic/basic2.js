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
