// ?? - null coalesing operator


function greet (firstName = 'Bob', lastName) {
	lastName = lastName ?? 'Smith';
	console.log(`${firstName} ${lastName}`);
}

greet('Mike');

