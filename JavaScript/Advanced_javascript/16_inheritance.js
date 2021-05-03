class Animal {
	consotructor (name) {
		this.name = name;
	}

	speak () {
		console.log(`I am ${this.name}`);
	}
}

class Dog extends Animal {
	constructor (name, owner) {
		super(name);
		this.owner = owner;
	}

	// to overwrite the function 
	// we need create function with the same name like in parent class
	speak () {
		console.log('Bark');
	}
}

class Cat extends Animal {
	// if we don't need additional construct
	// we don't need write a constructor
	// it will take constructor from parent class
	
	speak () {
		console.log('Meow');
	}
}

const dog = new Dog('Rex', 'Mike');
const cat = new Cat('Cat');


console.log(dog);
dog.speak(); 		// 'Bark'
cat.speak();		// 'Meow'


