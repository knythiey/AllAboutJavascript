// var, let, const

var name = 'John Doe';

console.log(name);

// init var
var greeting;

// letters, numbers, _, $
// Can not start with a number
// Multi word vars

var firstName = 'John'; // Camel Case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal

// LET (same as var but differs in block level scope)

// CONST (short for constant)

//Lecture 7
//DATA TYPES

//String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(test);

// Symbol
const sym = Symbol();
console.log(sym);

// Reference types - Objects
// Array
const hobbies = ['movies', 'music'];
// Object Literal
const address = {
	city : 'Cebu City',
	state: 'Cebu'
};
const today = new Date();

// Lecture 8
let val;

// Number to string
val = 5;

//output
console.log(val);
console.log(typeof val);
console.log(val.length);





