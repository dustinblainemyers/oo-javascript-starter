/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    describe() {

        return `${this.name}, ${this.age} years old`
    }

    sayHello() {

        console.log(`Hi, my name is ${this.name}`);
    }
    
9
}

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

//below I got some practice with the Object.create method.
// const Teacher = Object.create(Person, {

//     name: {value: "Betty"},
//     age: {value: 45},
//     teach: {

//         value: function(subject) {

//             console.log(`Welcome to ${subject}, my name is ${this.name}`);

//         }
//     } 
  
// })



class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    
    teach() {
        console.log(`Welcome to ${this.subject}, my name is ${this.name}`);

    }

}

class Convict extends Person {

    proclaimInnocence(crime) {
        console.log(`I am not guilty of ${crime} , I swear`);
    }
}
const me = new Person("Dustin",32);

console.log(me.describe());

const Larry = new Person("Larry",)

me.sayHello();


const Betty = new Teacher("Betty", 32, "math");

console.log(Betty.teach());

const Walter = new Convict("Walter", 23);

Walter.proclaimInnocence('shoplifting');