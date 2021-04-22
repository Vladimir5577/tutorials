const insertSort = (nums) => {
	
	let countCall = 0;

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			console.log(nums);
			if (nums[i] < nums[j]) {
				const spliced = nums.splice(i, 1);
				nums.splice(j, 0, spliced[0]);
			}
			
			countCall++;
		}
	}

	console.log('Count = ' +countCall);
};

nums = [5, 3, 2, 6, 4, 1];
insertSort(nums);


/**
 *	In this case we have 15 call;
 *	in Bubble sort it will be 24
 */
