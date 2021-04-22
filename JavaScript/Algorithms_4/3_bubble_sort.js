// Bubble sort

const bubbleSort = (nums) => {

	let countCall = 0;

	do {
		var swapped = false;
		for (let i = 0; i < nums.length; i++ ) {
			console.log(nums);
			if (nums[i] > nums[i + 1]) {
				var temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}

			countCall++;
		}
	} while(swapped);
	
	console.log(nums);
	console.log(countCall);
};

var nums = [5, 3, 6, 1, 2, 4];

bubbleSort(nums);

/**
 *	In our case we have 24 call 
 *	The same with insert sort will be 15 call
 * */
