function Person (firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname)
}

const risky = new Person('Risky', 'Amalia')
const huwaida = new Person('Huwaida', 'Azzahra')
console.log(risky)
risky.greet()

console.log(risky.__proto__ == huwaida.__proto__)

