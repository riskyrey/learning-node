var person = {
    firstname : '',
    lastname : '',
    greet: function (){
        return this.firstname + ' ' +  this.lastname
    }
}

// Object.create set up new object of person, an empty one
// Object.create is very simple clear and clean way to setup a sequence of object
// that inherit from another one, a prototype chain

var john = Object.create(person)
john.firstname = 'John'
john.lastname = 'Doe'

var risky = Object.create(person)
risky.firstname = 'Risky'
risky.lastname = 'Amalia'

console.log(john.greet()) // John Doe
console.log(risky.greet()) // Risky Amalia