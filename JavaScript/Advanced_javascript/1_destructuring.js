/*
	Destructuring  possible to unpack values from arrays,
	or properties from objects, into distinct variables. 
*/

console.log('---------------------------------------------');
console.log('Array destructoring  ------------------------');

const array = ['A', 'B', 'C', 'D'];

// old way
// const first = array[0];
// const second = array[1];

// new way destructuring
const [first, second, third] = array;

console.log(first);
console.log(second);
console.log(third);


console.log('---------------------------------------------');
console.log('Array destructoring  ------------------------');

function addAndMultiply (a, b) {
	return [a + b, a * b];
}

// old way
// const result = addAndMultiply(2, 3);
// console.log(result[0]);
// console.log(result[1]);

// destructuring
const [sum, product] = addAndMultiply(2, 3);
console.log(sum);
console.log(product);


console.log('---------------------------------------------');
console.log('Object destructoring  -----------------------');

function objDestr (a, b) {
	return { sumValue: a + b, multValue: a * b };
}

const { sumValue, multValue } = objDestr(2, 3);
console.log(sumValue);
console.log(multValue);


console.log('---------------------------------------------');
console.log('Object destructoring  -----------------------');


const person = {
	name: 'Bob',
		age: 25,
		favoriteFood: 'Rice',
		address: {
			street: '123 Main St',
			city: 'London'
		}
};

// old way
// const name = person.name;
// const age = person.age;

// Destructuring
const { name: firstName, age } = person; 
const { address: { street, city }, zipcode = '123' } = person;

console.log(firstName);
console.log(age);
console.log(street);
console.log(city);
console.log(zipcode);

console.log('---------------------------------------------');
console.log('Object and array destructoring  -------------');

function fn (options) {
	const { a, b } = options;
	return [a + b, a * b];
}

const [value1, value2] = fn({ a: 2, b: 3 });
console.log(value1, value2);

