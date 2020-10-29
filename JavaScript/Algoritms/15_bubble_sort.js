// Bubble sort 

function sort (arr) {
	const resultArray = [...arr];

	for (let outer = 0; outer < resultArray.length; outer++) {
		let outerEl = resultArray[outer];

		for (let inner = outer + 1; inner < resultArray.length; inner++) {
			let innerEl = resultArray[inner];

			if (outerEl > innerEl) {    		// or < for descending order
				resultArray[outer] = innerEl;
				resultArray[inner] = outerEl;

				outerEl = resultArray[outer];
				innerEl = resultArray[inner];
			}
		}
	}

	return resultArray;
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);
