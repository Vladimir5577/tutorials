const people = [
	{ name: 'Bob', age: 25, budget: 40000 },
	{ name: 'Mike', age: 19, budget: 3400 },
	{ name: 'Jack', age: 35, budget: 50000 },
	{ name: 'Rick', age: 15, budget: 1800 },
	{ name: 'Mark', age: 26, budget: 25000 },
	{ name: 'Jon', age: 10, budget: 2300 },
];

console.log('--- For --------------------------------------------');

// for
for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
}

console.log('--- For of ------------------------------------------');

// for of
for (let person of people) {
	console.log(person);
}


console.log('--- ForEach ------------------------------------------');

/*
// ForEach (old syntax)
people.forEach(function (person) {
	console.log(person);
});
*/

// ES6 (new syntax)
people.forEach(person => console.log(person));


console.log('--- Map -----------------------------------------------');

// Map
const newPeople = people.map(person => `${person.name} ${person.age}`);

console.log(newPeople);


console.log('--- Filter-----------------------------------------------');

// Filter

/*
// old way
const adults = [];
for (let i = 0; i < people.length; i++) {
	if (people[i].age >= 18) {
		adults.push(people[i]);
	}
}

console.log(adults);
*/

// new format
const adults = people.filter(person => person.age >= 18);

console.log(adults);


console.log('--- Reduce-----------------------------------------------');

// Reduce
// count budget of every person

/*
let amount = 0;
for (let i = 0; i < people.length; i++) {
	amount += people[i].budget;
}

console.log(amount);
*/

// Better way
const amount = people.reduce((total, person) => total + person.budget, 0);

console.log(amount);


console.log('--- Find -------------------------------------------------');

// Find
const bob = people.find(person => person.name === 'Bob');
console.log(bob);


console.log('--- Find index --------------------------------------------');

// Find index
const jack = people.findIndex(person => person.name === 'Jack');
console.log(jack);

console.log('--- Exercise ----------------------------------------------');

// Find peoples with budget more than 3000
const richPeople = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} ${person.age}`,
			budget: person.budget
		};
	});

console.log(richPeople);

// count budget of this peoples
const amountBudget = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} ${person.age}`,
			budget: person.budget
		};
	})
	.reduce((total, person) => total + person.budget, 0);

console.log(amountBudget);
