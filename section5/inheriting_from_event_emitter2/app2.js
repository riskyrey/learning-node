var util = require('util')

function Person(){
    this.firstname = 'Huwaida'
    this.lastname = 'Azzahra'
}

Person.prototype.greet = function() {    
    console.log('Hello ' + this.firstname + ' ' + this.lastname)
}

function Policeman(){
    Person.call(this) // if this line is added, the result = Hello Huwaida Azzahra
    this.badgenumber = '1234'
    
}

util.inherits(Policeman, Person)

var officer = new Policeman()
officer.greet() // result = Hello undefined undefined

// Why? Because util.inherits just connected the prototypes.
//  It connected what's available to all objects
// being created from this function constructor