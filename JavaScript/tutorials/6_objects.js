const person = Object.create(
	{ }
	, {
	name: {
		value: 'Bob',
		enumerable: true, // for for loop
		writable: true,
		configurable: true
	},
	birthYear: {
		value: 1993,
		enumerable: true,
		configurable: true
	},
	age: {
		get() {
			return new Date().getFullYear() - this.birthYear;
		},
		set(value) {
			console.log('Set age ', value);
		}
	}
})

console.log(person); // for browser

console.log(person.name);
console.log(person.birthYear);

for (let key in person) {
	console.log('Key', key, person[key]);
}
