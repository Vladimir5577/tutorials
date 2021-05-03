const person = {
	_userName: 'Developer', // use _ to mark private property
	firstName: 'Bob',
	lastName: 'Smith',
	get userName () {
		return this._userName;
	},
	get fullName () {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName (value) {
		[this.firstName, this.lastName] = value.split(' ');
	},
};

person.fullname = 'Mike Pense';

console.log(person);
console.log(person.fullName);

console.log(person.userName);

//============================================

const person2 = {
	age: 25,
	get birthYear () {
		const date = new Date();
		return date.getFullYear() - this.age;
	},
};

console.log(person2.birthYear);
