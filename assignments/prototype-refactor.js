/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function onePerson(name, age) {
    this.name = name;
    this.age = age;
    // this.greet = function() {
    //     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    // }
};

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

const Alison = new onePerson('Alison', 21);
console.log(Alison.greet());


//Using this one instead: Person
function Person(personName, personAge) {
    this.name = personName;
    this.age = personAge;
    this.stomach = [];
}

Person.prototype.greet = function() {
    return `Hello, I am ${this.name} and I am ${this.age} years old`;
}

Person.prototype.eat = function(eatFood) {
    return this.stomach.push(eatFood);
}

Person.prototype.poop = function() {
    return this.stomach = [];
}