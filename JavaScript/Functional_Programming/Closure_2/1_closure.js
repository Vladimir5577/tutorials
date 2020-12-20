function foo () {
	var hello = 'Hello World';

	function sayHello () {
		console.log(hello);
	}

	callBack(sayHello);
}

function callBack (bla) {
	bla();
}

foo();

