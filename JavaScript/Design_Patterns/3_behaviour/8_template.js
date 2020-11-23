class Employee {
	constructor (name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	responsibilities () {}

	work () {
		return `${this.name} do ${this.responsibilities()}`;
	}

	getPaid () {
		return `${this.name} have salary ${this.salary}`;
	}
}

class Developer extends Employee {
	constructor (name, salary) {
		super(name, salary);
	}

	responsibilities () {
		return 'process developing programm';
	}
}

class Tester extends Employee {
	constructor (name, salary) {
		super(name, salary);
	}

	responsibilities () {
		return 'process testing';
	}
}

const dev = new Developer('Bob', 100000);
console.log(dev.getPaid());
console.log(dev.work());


const tester = new Tester('Viktoria', 9000);
console.log(tester.getPaid());
console.log(tester.work());
