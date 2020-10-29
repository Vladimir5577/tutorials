// Recursion Fibonacci
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fib (n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(8));
