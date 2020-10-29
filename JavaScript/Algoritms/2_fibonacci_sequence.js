// Fibonacci number
//  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....

// Return nth element of the Fibonacci sequence 
// e.g. fib(4) yields 5

function fib (n) {
	const numbers = [1, 1];
	for (let i = 2; i < n + 1; i++) {
		numbers.push(numbers[i - 2] + numbers[i - 1]);
	}

	console.log(numbers);
	return numbers[n];
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(15));

