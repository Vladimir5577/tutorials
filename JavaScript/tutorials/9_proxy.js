// Object

console.log('---------------------------------------------------');
console.log('---- Object  --------------------------------------');

const person = {
	name: 'Bob',
	age: 25,
	job: 'Programmer'
};

const op = new Proxy(person, {
	get(target, prop) {
		// console.log('Target', target);
		// console.log('Prop', target);
		console.log(`Getting prop ${prop}`);
		return target[prop];
	},
	
	set(target, prop, value) {
		if (prop in target) {
			target[prop] = value;
		} else {
			throw new Error(`No ${prop} field in target`);
		}
	},
	
	has(target, prop) {
		return ['age', 'job'],includes(prop);
	},
	
	deleteProperty(target, prop) {
		console.log('Deleting...', prop);
		delete target[prop];
		return true;
	}
});

console.log(op.name);
console.log(op.age);

// Function -------------------------------
console.log('----  Function --------------------------------------');

const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
	apply(target, thisArg, args) {
		console.log('Calling fn...');

		return target.apply(thisArg, args).toUpperCase();
	}
});

console.log(fp('test'));


// Classes --------------------------------
console.log('---- Classes --------------------------------------');

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const PersonProxy = new Proxy(Person, {
	construct(target, args) {
		console.log('Construct...');
	
		return new Proxy(new target(...args), {
			get(t, prop) {
				// console.log(`Getting prop "${prop}"`); // for browser
				return t[prop];
			}
		});
	}
});

const p = new PersonProxy('Bob', 29);

console.log(p);
console.log(p.name);

console.log('---------------------------------------------------');
