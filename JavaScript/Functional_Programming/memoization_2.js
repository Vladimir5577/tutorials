const memo = (fn) => {
	const cache = {};

	return (n) => {
		if (n in cache) {
			return cache[n];
		}

		return cache[n] = fn(n);
	};
}

// to add memoization we need add the 'memo' function 
const factorial = memo((x) => {
	console.log('Calculation for x = ' + x);

	return (!x || x === 1) ? 1 : x * factorial(x - 1);
});

console.log(factorial(5));	 // first caunt 
console.log(factorial(5));	// anotrher call goes from cache
console.log(factorial(5));	// from cache

console.log(factorial(7));
