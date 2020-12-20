function* gen () {
	console.log('Hello');
	yield null;
	console.log('World');
}

var it = gen();
it.next(); 		// prints 'Hello'
it.next(); 		// prints 'World'

