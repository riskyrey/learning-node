var obj = {
    greet : "Hola"
}

console.log(obj.greet)
console.log(obj['greet'])

var nm = 'greet'
console.log(obj[nm]) // we can use variable which contains string to dynamically grab a value

// functions and arrays

var arr = []
arr.push(function(){
    console.log('Hi World 1')
})
arr.push(function(){
    console.log('Hi World 2')
})
arr.push(function(){
    console.log('Hi World 3')
})
arr.push(function(){
    console.log('Hi World 4')
})

arr.forEach(function(item){
    item() // we can put function in array
})