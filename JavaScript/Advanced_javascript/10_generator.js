function* simpleGenerator () {
	console.log('Before 1');
	yield 1;
	console.log('After 1');
	console.log('Before 2');
	yield 2;
	console.log('After 2');
	console.log('Before 3');
	yield 3;
	console.log('After 3');
}

const generator = simpleGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


console.log('--- Fibonacci generator ----------------------');


function* fibonacciGenerator () {
	let prevOne = 0;
	let prevTwo = 1;

	yield 0;
	yield 1;

	while (true) {
		const result = prevOne + prevTwo;
		yield result;
		prevOne = prevTwo;
		prevTwo = result;
	}
}

const fibGenerator = fibonacciGenerator();
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());

console.log('--- Id generator ----------------------------');

function* idGenerator () {
	let count = 1;

	while (true) {
		yield count++;
	}
}

const idGen = idGenerator();
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.next());
console.log(idGen.return()); // to exet out of the generator
