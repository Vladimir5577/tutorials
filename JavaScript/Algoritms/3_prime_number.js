// Primarity number
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 

function isPrime (number) {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}	

	return true;
}


console.log(isPrime(5));
console.log(isPrime(9));


/*
5 % 2 => 1
4 % 2 => 0
*/
