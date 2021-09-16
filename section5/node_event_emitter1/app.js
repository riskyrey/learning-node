var Emitter = require('./emitter')
var emt = new Emitter()

// Add property and value to array/obj event
emt.on('greet', function(){
    console.log('Somewhere, someone said hello')
})

// Add 2nd property and value to array/obj event
emt.on('greet', function(){
    console.log('A greeting occurred ! ')
})

console.log('-----Emit------')
// Show all value/func in event
emt.emit('greet')