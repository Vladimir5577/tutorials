class Person {
	constructor (name, age, likes = []) {
		this.name = name
		this.age = age
		this.likes = likes
	}
	
	getPersonData () {
		let data = `${this.name} age is ${this.age}.`
		this.likes.forEach((like) => {
			data += ` ${this.name} likes ${like}.`
		})

		return data;
	}

	setName (anotherName) {
		this.name = anotherName
	}
}

const myPerson = new Person('Bob', 29, ['Programming', 'Coding']);
myPerson.setName('Mike')
console.log(myPerson.getPersonData());

