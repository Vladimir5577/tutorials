console.log('------------------------------------------------------');

const numbers = [12, 25, 77];
// create a new array with the numbers doubled

const doubled = numbers.map((number) => {
	return number * 2;
});

console.log(doubled);
// [24, 50, 154]


console.log('------------------------------------------------------');

const days = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// create a new array with the first 3 letters of each day
const abreviated = days.map((day) => {
	return day.substring(0, 3);
});

console.log(abreviated);
// ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


console.log('------------------------------------------------------');


const people = [
{
	first_name: 'Bob',
	last_name: 'Stone'
},
{
	first_name: 'Mike',
	last_name: 'Milial'
},
{
	first_name: 'Jon',
	last_name: 'Do'
},
{
	first_name: 'Harvy',
	last_name: 'Spector'
},
{
	first_name: 'Donna',
	last_name: 'Paulson'
},
{
	first_name: 'Luis',
	last_name: 'Litt'
}
];

// Create a new array with the string full name of each person
const fullNames = people.map((person) => {
	return `${person.first_name} ${person.last_name}`;
});

console.log(fullNames);
	

console.log('------------------------------------------------------');

const animals = [
	{
		'name': 'cat',
		'size': 'small'
	},{
		'name': 'dog',
		'size': 'small'
	},{
		'name': 'lion',
		'size': 'medium'
	},{
		'name': 'elephant',
		'size': 'big'
	}
];

// create a new array with names
const animalNames = animals.map((animal) => animal.name);
console.log(animalNames);

console.log('------------------------------------------------------');

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
const things = theNumbers.map((value, index) => {
	return {
		value, index
	};
});

console.log(things);


console.log('------------------------------------------------------');

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e. g. [2 * 5, 5 * 10, 10 * 2] = [10, 50, 20]

const multipledByNext = starter.map((number, index, array) => {
	let nextIndex = index + 1;

	if (index == array.length - 1) {
		nextIndex = 0;
	}

	return number * array[nextIndex];
}); 

console.log(multipledByNext);


console.log('------------------------------------------------------');
