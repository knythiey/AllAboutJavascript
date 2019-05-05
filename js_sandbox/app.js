// var, let, const

//var name = 'John Doe';

//console.log(name);

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
//console.log(typeof name);

// Number
const age = 45;
//console.log(typeof age);

// Boolean
const hasKids = true;
//console.log(typeof hasKids);

// Null
const car = null;
//console.log(typeof car);

//undefined
let test;
//console.log(test);

// Symbol
const sym = Symbol();
//console.log(sym);

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
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//setting local storage item
localStorage.setItem('name', 'kynt');

//settings session storage
sessionStorage.setItem('age', 27);

//remember, local/session storage only stores strings. so use json.stringify when storing, and when parsing thru foreach, use json.parse to make it a json.

// ALL ABOUT javascript prototypes

// THIS IS PART WAS ES5

	// Person constructor
	function Person(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Greeting
	Person.prototype.greeting = function(){
		return `Hello there ${this.firstName} ${this.lastName}`;
	};

	const person1 = new Person('John', 'Doe');

	//console.log(person1.greeting());

	// Customer constructor
	function Customer(firstName, lastName, phone, membership) {
		Person.call(this, firstName, lastName);

		this.phone = phone;
		this.membership = membership;
	}

	// Inherit the Person prototype methods
	Customer.prototype = Object.create(Person.prototype);

	// Make customer.prototype return Customer()
	Customer.prototype.constructor = Customer;

	// Create customer
	const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

	//console.log(customer1);

	// Customer greeting
	Customer.prototype.greeting = function(){
		return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
	};

	//console.log(customer1.greeting());

	const personPrototypes = {
		greeting: function() {
			return `Hello there ${this.firstName} ${this.lastName}`;
		},
		getsMarried: function(newLastName) {
			this.lastName = newLastName;
		}
	};

	const mary = Object.create(personPrototypes);
	mary.firstName = 'Mary';
	mary.lastName = 'Williams';
	mary.age = 30;

	mary.getsMarried('Thompson');

	//console.log(mary.greeting());

	const brad = Object.create(personPrototypes, {
		firstName: {value: 'Brad'},
		lastName: {value: 'Traversy'},
		age: {value: 36}
	});

	//console.log(brad);

	//console.log(brad.greeting());

// THIS PART IS ES6 ALREADY
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName) {
		this.lastName = newLastName;
	}

	static addNumbers(x, y) {
		return x + y;
	}
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

//console.log(mary);

//console.log(Person.addNumbers(1,2));


// ES6 inheritance (subclass)
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}
}

class Customer extends Person {
	constructor(firstName, lastName, phone, membership) {
		super(firstName, lastName);

		this.phone = phone;
		this.membership = membership;
	}

	static getMembershipCost() {
		return 500;
	}
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

//console.log(john.greeting());

//console.log(Customer.getMembershipCost());