// Find a minimum number in array

function getMin (numbers) {
	let currentMin = numbers[0];
	for (const num of numbers) {
		if (num < currentMin) {
			currentMin = num;
		}
	}

	return currentMin;
}

console.log(getMin([1, 2, 3, 5]));
console.log(getMin([9, 8, 5, 2]));
console.log(getMin([10, 3, 5, 89, 92, 45]));
console.log(getMin([24, 57, 48, 88]));
