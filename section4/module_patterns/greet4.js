function Greetr(){
    this.greeting = "Hello Greeting 4"
    this.greet = function(){
        console.log(this.greeting)
    }
}

module.exports = Greetr