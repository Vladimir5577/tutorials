// Quick sort

function sort (arr) {
	const copiedArray = [...arr];

	if (copiedArray.length <= 1) {
		return copiedArray;
	}

	const smallerElementsArray = [];
	const biggestElementsArray = [];
	const pivotElement = copiedArray.shift();
	const centerElementsArray = [pivotElement];

	while (copiedArray.length) {
		const currentElement = copiedArray.shift();
		if (currentElement === pivotElement) {
			centerElementsArray.push(currentElement);
		} else if (currentElement < pivotElement) { 
			smallerElementsArray.push(currentElement);
		} else {
			biggestElementsArray.push(currentElement);
		}
	}

	const smallerElementSortedArray = sort(smallerElementsArray);
	const biggerElementSortedArray = sort(biggestElementsArray);
	return smallerElementsArray.concat(
		centerElementsArray,
		biggerElementSortedArray
	);
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
