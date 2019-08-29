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

onePerson.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

const Mary = new onePerson('Mary', 21);
console.log(Mary.greet());


//Using this one instead: Person
function nextPerson(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

nextPerson.prototype.greet = function() {
    return `Hello, I am ${this.name} and I am ${this.age} years old`;
}

nextPerson.prototype.eat = function(eatFood) {
    return this.stomach.push(eatFood);
}

nextPerson.prototype.poop = function() {
    return this.stomach = [];
}

// refactoring using class and extends
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const Alison = new Person('Alison');
console.log(Alison);
console.log(Alison.greet());

// declaring a 2nd class called Student
class Student extends Person {
    constructor(name) {
        super(name);
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm a new student at Lambda!`);
    }
}

const Brian = new Student('Brian');
console.log(Brian);
console.log(Brian.greet());

// creating a 3rd class called Teacher
class Teacher extends Person {
    constructor(name) {
        super(name);
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I teach Javascript at Lambda!`);

    }
}
const Toni = new Teacher('Toni');
console.log(Toni);
console.log(Toni.greet());