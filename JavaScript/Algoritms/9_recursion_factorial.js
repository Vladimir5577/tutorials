// Factorial - Recursive Solution
// Calling a function from inside

function fact (number) {
	if (number === 1) {		// => base case
		return 1;
	}
	
	return number * fact(number - 1);  // recursive step
}

console.log(fact(3)); // 3 * 2 * 1 => 6
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
