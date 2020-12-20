function foo () {
	var hello = 'Hello World';

	return function () {
		console.log(hello);
	};
}

function sayHello () {
	foo()();
}

sayHello();
