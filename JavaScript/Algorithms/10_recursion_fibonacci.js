// Recursion Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

/*
function fib (n) {
	if(n <= 2) {
		return n - 1;
	}
	return fib(n-2) + fib(n-1);
}
*/

/*
function fib (n) {
	return (n <= 2) ? n-1 : fib(n-2) + fib(n-1);
}
*/


function fib (n) {
	if (n === 0 || n === 1) {
			return 1;
	}

	return fib(n - 1) + fib(n - 2);
}


// const fib = n => (n <= 2) ? n-1 : fib(n-2) + fib(n-1);


console.log(fib(7));
