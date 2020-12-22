var a = 'Hello';

function foo () {
	let a = 0;
	return function () {
		return ++a;
	};
}

var out = foo();
console.log(out()); // 1
console.log(out()); // 2
console.log(out()); // 3

