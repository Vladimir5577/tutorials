/*
// old way
const animal = {
	name: 'Cat',
	age: 3,
	hasTail: true
};

console.log(animal);
*/


console.log('--------------------------------------------------');

// ES6
class Animal {
	// static type = 'ANIMAL'; // for new wersion

	constructor(options) {
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
	}

	voice () {
		console.log('I am an animal');
	}
}

const animal = new Animal({
	name: 'Animal',
	age: 3,
	hasTail: true
});

console.log(animal);
console.log(animal.voice());
// console.log(Animal.type);  // for new version

console.log('--------------------------------------------------');

class Cat extends Animal {
	// static type = 'Good cat'; // for new version
	constructor(options) {
		super(options);
		this.color = options.color;
	}

	voice () {
		super.voice();	 // add data from parent class
		console.log('I am a cat');
	}

	get ageInfo () {
		return this.age * 7;
	}
}

const cat = new Cat({
	name: 'Cat',
	age: 2,
	hasTail: true,
	color: 'white'
});

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.voice());
console.log(cat.ageInfo);
// console.log(cat.type); // for new version



console.log('--------------------------------------------------');
