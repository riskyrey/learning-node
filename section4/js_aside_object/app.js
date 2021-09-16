const person = {
    firstname : 'Risky',
    lastname : 'Amalia',
    greet : function(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname)
    }
}

person.greet()
console.log(person['firstname'])