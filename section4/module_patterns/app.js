var greet = require('./greet1')
greet() // Hello World

var greet2 = require('./greet2').greet
greet2() // Hello Earth

var greet3 = require('./greet3')
greet3.greet() // Hello You
greet3.greeting = 'Hello Power Ranger'

var greet3b = require('./greet3')
greet3b.greet() // Hello Power Ranger

var Greet4 = require('./greet4')
var grtr = new Greet4()
grtr.greet() // Hello Greeting 4

var greet5 = require('./greet5').greet
greet5() // Hello World 5