// exports is shorthand of module.exports, but we can't override/use equals, 
// only can be mutated (add property or method)
exports = function(){
    console.log('Hello exports')
}
console.log(exports)
console.log(module.exports)