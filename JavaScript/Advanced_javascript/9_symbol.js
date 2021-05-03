/*
	 Symbol it is always unique.
	 The main use of a symbols to create 
	 a private variable on an object,
	 Add to another variable to an object
	 that not clash with another keys of the object,
	 and gonna be visible to everyove.
*/
const sym1 = Symbol('Name');
const sym2 = Symbol('Name');

console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2);  // false

const person = {
	age: 25,
	[sym1]: 'Bob',
};

console.log(person);

