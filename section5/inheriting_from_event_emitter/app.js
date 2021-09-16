var EventEmitter = require('events')
var util = require('util')

function Greetr(){
    this.greeting = 'Hello you'
}

util.inherits(Greetr, EventEmitter) // give access with any object that we created using a new Greetr (the first parameter) to all of the event Emmiter's properties and methods or same as new EventEmitter

Greetr.prototype.greet = function(){
    console.log(this.greeting)
    this.emit('greet')
}

var greeter1 = new Greetr()

greeter1.on('greet', function(){
    console.log('Someone greeted')
})

greeter1.greet()