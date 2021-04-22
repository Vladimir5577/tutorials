// summ of the array

const addTogether = list => {
	return list.reduce((acc, num) => acc + num, 0);
};

const arr1 = [2, 3, 4, 5];
console.log(addTogether(arr1));


// ==================================
const concatenateStringWithSpaces = list => {
	return list.reduce((acc, string) => acc + string + " ", "");
};

const arr2 = ['Hello', 'my', 'name', 'is', 'Bob'];
console.log(concatenateStringWithSpaces(arr2));

//====================================
const squareAndSubtract = list => {
	return list
		.map(num => num * num)
		.reduce((accumulator, num) => accumulator - num);
};

const arr3 = [10, 5, 4, 2, 1];
console.log(squareAndSubtract(arr3));

// ====================================
const myReduce = (list, fn, seed) => {
	let answer = seed;
	for (let i = 0; i < list.length; i++) {
		answer = fn(answer, list[i]);
	}

	return answer;
};

const arr4 = [4, 2, 3, 2];
const applyDivisors = (accumulator, divisor) => accumulator / divisor;
console.log(myReduce(arr4, applyDivisors, 240));