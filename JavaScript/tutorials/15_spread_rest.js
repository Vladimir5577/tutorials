// Spread - use to stringify array or object

const citiesRussia = ['Moscow', 'Rostow', 'Tyla', 'Sanct-Peterburgs', 'Novasibirsk'];
const citiesEurope = ['Berlin', 'Prague', 'Paris', 'Rome'];


console.log('-----------------------------------------------------------');
console.log('---- Spread array ---------------------------------------- ');

// Spread array
console.log(...citiesRussia);
console.log(...citiesEurope);

const allCities = [...citiesRussia, ...citiesEurope];
console.log(allCities);



console.log('---- Spread object ---------------------------------------- ');

// Spread object
const citiesPopulation = {
	Moscow: 100,
	Praha: 34,
	Paris: 59,
	Tyla: 53
};

console.log({ ...citiesPopulation });


console.log('---- Find max number with spread ------------------------- ');
// find max number
const numbers = [5, 47, 24, 59, 22];
console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers));


console.log('---- Rest -------------------------------------------------');

// Rest with array
function sum (a, b, ...rest) {
	console.log(...rest);
	return a + b + rest.reduce((a, i) => a + i, 0);
}

const arrNumbers = [1, 2, 3, 4, 5];

console.log(sum(...arrNumbers));

// Rest with object
const person = {
	name: 'Bob',
	age: 24,
	city: 'London',
	country: 'UK'
};

const {name, age, ...address} = person;
console.log(name, age, address);

console.log('-----------------------------------------------------------');

