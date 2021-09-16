function greet(callback){
    console.log('Hello')
    var data = {
        name: 'John Doe'
    }
    callback(data)
}

greet(function(data){
    console.log('First call')
    console.log(data)
})
greet(function(data){
    console.log('Second call')
    console.log(data.name)
})


