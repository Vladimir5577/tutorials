// We need to double each element in the array
const array = [1, 2, 3, 4, 5];

/*
// usual approach
const newArray = [];
for (let i = 0; i < array.length; i++) {
	newArray.push(array[i] * 2);
}

console.log(newArray);
*/

// higher order funciton
const newArray = array.map(element => element * 2);
console.log(newArray);

//=============================

const newArray2 = everyOtherMap(array, element => element * 2);
console.log(newArray, ' - custom higher order function');

function everyOtherMap (arr, func) {
	return arr.map((element, i) => {
		if (i % 2 === 0) return func(element);
		return element;
	});
}
	



