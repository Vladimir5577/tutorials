// Interface segregation

// Clients should not be forced to depend on methods they do not use.


/*
// bad practice (without interface segregation)
class Animal {
	constructor (name) {
		this.name = name;
	}

	walk () {
		console.log(`${this.name} can walk`);
	}

	swim () {
		console.log(`${this.name} can swim`);
	}

	fly () {
		console.log(`${this.name} can fly`);
	}
}

class Dog extends Animal {
	fly () {
		return null;
	}
}

class Eagle extends Animal {
	swim () {
		return null;
	}
}

class Whale extends Animal {
	walk () {
		return null;
	}

	fly () {
		return null;
	}
}

const dog = new Dog('Rex');
dog.walk();
dog.swim();
dog.fly();

const eagle = new Eagle('Eagle');
eagle.fly();
eagle.swim();
eagle.walk();

const whale = new Whale('White whale');
whale.swim();
whale.fly();
whale.walk();

*/


// Interface segregation (we not include unwanted method)
class Animal {
	constructor (name) {
		this.name = name;
	}
}

const swimmer = {
	swim () {
		console.log(`${this.name} can swim`);
	}
}

const flier = {
	fly () {
		console.log(`${this.name} can fly`);
	}
}

const walker = {
	walk () {
		console.log(`${this.name} can walk`);
	}
}


class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
dog.walk();
dog.swim();

const eagle = new Eagle('Eagle');
eagle.fly();
eagle.walk();

const whale = new Whale('White whale');
whale.swim();


