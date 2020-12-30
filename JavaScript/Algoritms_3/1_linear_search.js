// linear search

let count = 0;

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

function linearSearch (array, item) {
	for (let i = 0; i < array.length; i++) {
		count += 1;
		if (array[i] === item) {
			return i;
		}
	}

	return null;
}

// console.log(linearSearch(array, 8)); // 3
// console.log('Count = ', count);		// Count = 4
console.log(linearSearch(array, 11));	// 10 
console.log('Count = ', count);			// Count = 11

