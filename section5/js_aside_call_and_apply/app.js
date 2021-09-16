var obj = {
    name : 'Me',
    greet : function(){
        console.log(`Hello ${this.name}`)
    }
}

// with call and apply, you can pass parameter
obj.greet()
obj.greet.call({name : 'Huwaida'})
obj.greet.apply({name : 'Azzahra'})