"use strict";

console.log("Hello World!");

// single line comments
/*
    Multi
    line
    comments
*/

/* 
    Variables:
    1) var
    2) let
    3) const
*/

/*
    Important Point 1: var is hoisted, let and const are not hoisted
*/

console.log(num1); // prints undefined due to hoisting
var num1 = 10;
console.log(num1); // prints 10

console.log(num2); // throws ReferenceError since let isn't hoisted
let num2 = 20;
console.log(num2); // prints 20

console.log(num3); // throws ReferenceError since const isn't hoisted
const num3 = 3.14;
console.log(num3); // prints 3.14

/* 
    Important Point 2: var is function scoped, let is block scoped
*/

if (true) {
    var num4 = 10;
    let num5 = 20;
}
console.log(num4); // prints 10
console.log(num5); // throws ReferenceError since let is block scoped

const pi = 3.14;
pi = 70; // illegal, throws TypeError: Assignment to constant variable.

/*
JavaScript functions 
*/

// 1) function declaration
console.log(sum(10, 20)); // this will work since function declarations are hoisted

function sum(number1, number2) {
    return number1 + number2;
}

const finalSum = sum(10, 20); // this will work as well

// 2) function expressions: using anonymous function
console.log(sumExpression(10, 20)); // this won't work since functions expressions aren't hoisted

const sumExpression = function (number1, number2) {
    return number1 + number2;
};

console.log(sumExpression(10, 20)); // this will

// 3) function expressions: using arrow function
console.log(sumArrowFunction(10, 20)); // this won't work since functions expressions aren't hoisted

const sumArrowFunction = (number1, number2) => {
    return number1 + number2;
};

console.log(sumArrowFunction(10, 20)); // this will work

// conditionals
const age = 10;
if (age < 50) {
    console.log(age);
} else if (age === 50) {
    console.log(age);
} else {
    console.log(age);
}

switch (age) {
    case 10:
        console.log(age);
        break;
    case 20:
        console.log(age);
        break;
    default:
        console.log(age);
}

// comparison operators
const num7 = 3.14;
const num8 = "3.14";

console.log(num7 == num8); // == checks only values
console.log(num7 === num8); // === checks type and values

// data types
console.log(typeof num7); // number
console.log(typeof num8); // string

const myArray = [10, 20];
const myObject = {};
console.log(typeof myArray); // object
console.log(typeof myObject); // object

/*
 string manipulation and functions
 */

// trim() and split()
const userName = "        John Smith Jr            ";
const nameArray = userName.trim().split(" "); // function chaining is allowed
console.log(nameArray);

const URL = "localhost:4200";
const urlArray = URL.split(":");
const port = Number(urlArray[1]);
console.log(typeof port);

// concatenation
const firstName = "John";
const lastName = "Smith";

const fullName = firstName.concat(lastName);
const concatenatedNames = firstName + " " + lastName + 50;
console.log(concatenatedNames);

// string literals
const statement = firstName + " " + lastName + " is 50 years old";
const statementStringLiteral = `${firstName} ${lastName} is 50 years old`;
console.log(statementStringLiteral);

// indexOf
console.log(fullName);
console.log(fullName.indexOf("Smith"));
