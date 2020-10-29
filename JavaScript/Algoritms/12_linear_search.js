// Linear Search

console.log('------------------------------------------------');

// find index of the array
function findElement (arr, element) {
	let index = 0;
	for (const item of arr) {
		if (item == element) {
			return index;
		}

		index++;
	}
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));
console.log(findElement(arr, 33));


console.log('------------------------------------------------');


