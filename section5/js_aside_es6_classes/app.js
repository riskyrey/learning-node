'use strict'

class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    greet() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname)
    }
}

var huwaida = new Person('Huwaida', 'Azzahra')
huwaida.greet()

var risky = new Person('Risky', 'Amalia')
risky.greet()

console.log(huwaida.__proto__)
console.log(risky.__proto__)
console.log(huwaida.__proto__ === risky.__proto__)