// Bitwise Magic

/*
& - bitwise operator

1 : 1
2 : 10
4 : 100
8 : 1000

A bitrise operation can be used to check if a number is power of two:

number & (number - 1) === 0  // true: it's power of two

4 & 8 = 0

*/

function isPowerOfTwo (number) {
	if (number < 1) {
		return false;
	}

	return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
