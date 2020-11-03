// Prototupe

console.log('---------------------------------------------');

/*
const person = {
	name: 'Bob',
	age: 25,
	greet: function () {
		console.log('Greeting');
	}
};

console.log('Name ' +  person.name);
console.log(person.greet);
*/

const person = new Object({
	name: 'Bob',
	age: 25,
	greet: function () {
		console.log('Greeting');
	}

});

Object.prototype.sayHello = function () {
	console.log('Hello World');
}

console.log(person.sayHello());


console.log('---------------------------------------------');

const mike = Object.create(person);

mike.name = 'Mike';

console.log(mike.name);
