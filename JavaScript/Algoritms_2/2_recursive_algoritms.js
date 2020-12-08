// Devide and Conquer algiritms are recursive algorithms
// it's a way to think about a problem

// ==================================================

/*
// usual approach (no recursion)
function sum (arr) {
	let total = 0;

	for (let i of arr) {
		total += i;
	}

	return total;
}

const array = [1, 2, 3, 4, 5];

console.log(sum(array));
*/

// ==================================================

// with recursion
function sum (arr) {
	if (arr.length === 0) return 0;

	return arr[0] + sum(arr.slice(1));
}

const array = [1, 2, 3, 4, 5];

console.log(sum(array));


// 1 + sum([2, 3, 4, 5])
// 2 + sum([3, 4, 5])

// 0 + 5
// 5 + 4
// 9 + 3
// 12 + 2
// 14 + 1
