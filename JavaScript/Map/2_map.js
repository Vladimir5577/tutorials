const numbers = [1, 2, 3];
// const result = [];

const result = numbers.map((number) => number * 2);

/*
// for
const result = [];
for (let i = 0; i < numbers.length; i++) {
	console.log(i);
	result[i] = double(numbers[i]);
}

function double (number) {
	return number * 2;
}
*/

/*
// forEach not working
const result = [];
numbers.forEach((number) => {
	result[i] = double(number);
});
*/


// [2, 4, 6]
console.log(result);
