// Binary search

function findElement (sortedArr, element) {
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;
	
	while (startIndex <= endIndex) {

		const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
		if (element === sortedArr[middleIndex]) {
			return middleIndex;
		}

		if (sortedArr[middleIndex] < element) {
			startIndex = middleIndex + 1;
		} else {
			endIndex = middleIndex - 1;
		}
	}
}


const arr = [1, 5, 2, 9, 99, 100];

console.log(findElement(arr, 99));
