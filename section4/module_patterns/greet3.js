function Greetr(){
    this.greeting = 'Hello You'
    this.greet = function(){
        console.log(this.greeting)
    }
}

module.exports = new Greetr()