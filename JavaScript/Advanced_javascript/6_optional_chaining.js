// ?.  --- it will check if property of the object exist or not 
// 	it won't throw a mistake if property does not exist
// this is optional chaining syntax

const person = {
	name: 'Bob',
	age: 25,
	address: {
		street: '123 Main St',
	},
};

function printStreet (personData) {
	console.log(personData?.address?.street);
	console.log(personData?.sayHi?.()); 
	// property sayHi() does not exist it won't throw a mistake
	// we can also check if it is a funciton 
}

printStreet(person);
