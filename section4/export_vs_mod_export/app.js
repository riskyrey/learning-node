var greet = require('./greet')
//greet() // { greet: [Function] } { greet: [Function] } error

var greet2 = require('./greet2')
greet2.greet() // { greet: [Function] } { greet: [Function] } Hello exports, not error because the object has been mutated 