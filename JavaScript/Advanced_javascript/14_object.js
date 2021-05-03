class Person {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}
	
	static job = 'Programmer';
	static country () {
		return 'Germany';
	}

	printName () {
		return this.name;
	}
}

const person = new Person('Bob', 25);

console.log(person);
console.log(person.printName());

// static method and property we call on the object
console.log(Person.job); 
console.log(Person.country());

// =============================================

/*
// without class
function User (email, password) {
	this.email = email;
	this.password = password;
}

User.prototype.printPassword = function () {
	console.log(this.password);
};

const user = new User('bob@bob.com', 'password123');
console.log(user);
*/

// class convert themself to prototype syntax

class User {
	constructor (email, password) {
		this.email = email;
		this.password = password;
	}

	get printEmail () {
		return this.email;
	}

	set newPassword (value) {
		this.password = value;
	}

	printPassword () {
		console.log(this.password);
	}
}

const user = new User('bob@bob.com', 'password123');
console.log(user);
console.log(user.printEmail);

