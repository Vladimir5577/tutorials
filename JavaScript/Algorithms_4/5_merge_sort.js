// Merge sort

const mergeSort = (nums) => {
	if (nums.length < 2) {
		return nums
	}

	const length = nums.length;
	const middle = Math.floor(length / 2);
	const left = nums.slice(0, middle);
	const right = nums.slice(middle, length);
	
	return stich(mergeSort(left), mergeSort(right));
};

const stich = (left, right) => {
	const results = [];
	
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	/*
	while (left.length) {
		results.push(left.shift());
	}
	
	while (right.length) {
		results.push(right.shift());
	}

	return results;
	*/
	// or another way
	
	/*
	return results.concat(right, left);
	// or another way
	*/

	return [...results, ...left, ...right];
};

var nums = [6, 2, 3, 1, 4, 5];
console.log(mergeSort(nums));
