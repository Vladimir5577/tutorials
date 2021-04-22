// Factorial

/*
fact(3);  // 3 * 2 * 1 = 6
fact(5);  // 5 * 4 * 3 * 2 * 1 = 120
*/

function fact (number) {
	let result = 1;
	for (let i = 2; i <= number; i++) {
		result = result * i;
	}

	return result;
}

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
