// recurcion

console.log('-----------------------------------------------------');
console.log('---- Factorial --------------------------------------');
// factorial
const factorial = (n) => {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
};

console.log(factorial(8));

console.log('-----------------------------------------------------');
console.log('---- Fibonacci --------------------------------------');
// Fibonacci [1, 1, 2, 3, 5, 8, 13, 21  ..... ]

const fibonacci = (n) => {
	if (n === 1 || n === 2) {
		return 1;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(8));
console.log('-----------------------------------------------------');
