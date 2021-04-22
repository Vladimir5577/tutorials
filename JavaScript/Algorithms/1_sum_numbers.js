// count sum of the array

/*
// first method
function sumNumbers (numbers) {
	let result = 0;
	for (const number of numbers) {
		result += number;
	}

	return result;
}
*/

// second method
function sumNumbers (numbers) {
	return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

console.log(sumNumbers([1, 3, 10, 50]));
