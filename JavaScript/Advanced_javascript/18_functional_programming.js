/*
	Pure function - rely only on input and return 
		does not modify value outside
		Not side effect

	---------------------

	Impure function - modify outside value
		Rely on variable outside a scope
		Side effect - changed value outside

*/


// =======================================================================
console.log('--- impure function  --------------------------------------');

const array = [1, 2, 3, 4];

// mutating value outside
function addElement (element) {
	array.push(element);
}

addElement(5);

console.log(array);


// --- another example ----

const person = {
	name: 'Bob',
	friends: ['Mike', 'Jack'],
}

// mutating value outside
function addFriend (friendName) {
	person.friends.push(friendName);
}

addFriend('Donna');
console.log(person, ' - modified object with impure function');


// =======================================================================
console.log('--- Pure function  --------------------------------------');

const array1 = [1, 2, 3, 4];

function addElement1 (arr, element) {
	return [...arr, element];
}

console.log(addElement1(array, 5), ' - modified array');  // [1, 2, 3, 4, 5] 
console.log(array1, ' - original array');				  // [1, 2, 3, 4]

// --- another example ----

const person1 = {
	name: 'Bob',
	friends: ['Mike', 'Jack'],
}

// rely on input value not mutating value outside
function addFriend1 (person, friendName) {
	return {
		...person,
		friends: [...person.friends, friendName]
	};
}

console.log(addFriend1(person1, 'Donna'), ' - brand new object created pure function');
console.log(person1, ' - original object not modified');

