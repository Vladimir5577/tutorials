// Binary search

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch (array, item) {
	let start = 0;
	let end = array.length;
	let middle;
	let found = false;
	let position = -1;

	while (found === false && start <= end) {
		middle = Math.floor((start + end) / 2);
		count += 1;
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}

		if (item < array[middle]) {
			end = middle -1;
		} else {
			start = middle + 1;
		}
	}

	return position;
}

// console.log(binarySearch(array, 8)); // 8 - because it is a first element 
// console.log(count);					 //	1 - middle	

console.log(binarySearch(array, 4));
console.log(count);


console.log('--- With Recursion ---------------------------------------------------');

// with recursion

let countRecursive = 0;

function recursiveBinarySearch (array, item, start, end) {
	let middle = Math.floor((start + end) / 2);
	countRecursive += 1;
	if (item === array[middle]) {
		return middle;
	}
	if (item === array[middle]) {
		return middle;
	}
	if (item < array[middle]) {
		return recursiveBinarySearch(array, item, start, middle - 1);
	} else {
		return recursiveBinarySearch(array, item, middle + 1, end);
	}
}

console.log(recursiveBinarySearch(array, 12, 0, array.length));
console.log(countRecursive);


