/*
	Private variable available only inside class
	and not available in inheritance classes

	Protected we can access in childs classes
	but javascript not provide such option.
	We can fake it with syntax _ 
*/


class Animal {
	constructor (name) {
		this.name = name;
	}
	
	// to create a private variable put # 
	#privateVariable = 'Shark';
	
	// setter for private variable
	setPrivateName (value) {
		this.#privateVariable = value;
	}

	// getter for private variable
	getPrivateName () {
		return this.#privateVariable;
	}

	// protected variable
	_owner = 'Bob';
}

const animal = new Animal('Cat');

console.log(animal);

// set private property
animal.setPrivateName('Whale');

// get private property
console.log(animal.getPrivateName());


