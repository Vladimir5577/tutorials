// find an even number

// even number / 2 without remainder
// odd number / 2 with remainder 1

function isEven (number) {
	return number % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(8));
console.log(isEven(25));
