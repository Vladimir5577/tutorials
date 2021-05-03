function sum (a, b) {
	return a + b;
}

// bind
console.log(sum.bind(null, 2)(3));  // 5

// call
console.log(sum.call(null, 2, 3)); // 5

// apply
console.log(sum.apply(null, [2, 3]));


console.log('--- Sum of an array---------------------------------');

function arrSum (...numbers) {
	return numbers.reduce((count, n) => count + n);
}

const numbers = [1, 2, 3, 4, 5];

// apply
console.log(arrSum.apply(null, numbers));

// call
console.log(arrSum.call(null, ...numbers));

// simple
console.log(arrSum(...numbers));

/*
	Call and apply are the same.
	But with apply we need to put parameters in array.
*/



