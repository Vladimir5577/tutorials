/*
 	Immutability - value can not be changed.

	Mutability - value can be changed.
*/

// mutate an array
const FAVORITE_NUMBERS = [1, 2, 3, 4];
FAVORITE_NUMBERS.push(5);
console.log(FAVORITE_NUMBERS);

// mutate an object
const person = {
	name: 'Bob',
	address: {
		street: '1234',
	},
}

person.name = 'Mike';
console.log(person, ' - mutable object');

// to not mutate an object we use "freeze" function
const person1 = Object.freeze({
	name: 'Bob',
});

person1.name = 'Jack';
console.log(person1, ' - immutable object');

// if need to change a freeze object we can clone it and change
const newPerson = { ...person1, address: { ...person.address, street: "Main str" } };

console.log(newPerson);
