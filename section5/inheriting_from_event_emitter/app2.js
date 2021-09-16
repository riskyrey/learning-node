var EventEmitter = require('events')
var util = require('util')

// HOW IF I WANT TO PASS A PARAMETER?
function Greetr(){
    this.greeting = 'Hello'
}

util.inherits(Greetr, EventEmitter) // give access with any object that we created using a new Greetr (the first parameter) to all of the event Emmiter's properties and methods or same as new EventEmitter

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data)
    this.emit('greet', data)
}

var greeter1 = new Greetr()

greeter1.on('greet', function(data){
    console.log('Someone greeted! ' + data)
})

greeter1.greet('Rey')