var Emitter = require('events')
var emt = new Emitter()
var {event} = require('./config')

// Add property and value to array/obj event
emt.on(event.GREET, function(){
    console.log('Somewhere, someone said hello')
})

// Add 2nd property and value to array/obj event
emt.on(event.GREET, function(){
    console.log('A greeting occurred ! ')
})

console.log('-----Emit------')
// Show all value/func in event
emt.emit(event.GREET)