
/*
// Old way  Without spread
function sum (numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sum([2, 3, 4, 5]));
*/

console.log('---- Rest  -------------------------------');

// rest
function sum (multiplier, ...numbers) {
	// console.log(multiplier); // 10
	// console.log(...numbers); // [2, 3, 4]
	return multiplier * numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sum(10, 2, 3, 4));

console.log('---- Spread  -------------------------------');

const numberArray = [2, 3, 4];

const newArray = [...numberArray];
numberArray.push(5);

console.log(newArray);     // [2, 3, 4]
console.log(numberArray);  // [2, 3, 4, 5]

// ----------------------------------

const array = ['A', 'B', 'C', 'D', 'E', 'F'];
const [first, second, ...rest] = array;
console.log(first);  // A
console.log(second); // B
console.log(rest);	 // ['C', 'D', 'E', 'F']

// ----------------------------------

const person = {
	name: 'Bob',
	age: 25,
	favoriteFood: 'Pizza',
	address: {
		street: '123 Main St',
		City: 'London',
		zipcode: '555555'
	},
};	

const { name, age, ...restInfo } = person;
console.log(name, age, restInfo);

// Clone an object with spread and add new info
const person2 = {...person, favoriteColor: 'Green'};
// then we can modify person2
// person2.name = 'Mike';
